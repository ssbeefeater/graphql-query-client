import nock from 'nock';
import { GraphQLQuery, setupEnvironment, Environment } from '../src';
describe('GraphQLQuery', () => {
    before(() => {
        setupEnvironment({
            url: 'http://graphqlFetch.com/graphql'
        })
    })
    beforeEach(() => {
        nock('http://graphqlFetch.com')
            .get('/graphql')
            .query(true)
            .times(100)
            .reply(200);
        nock('http://graphqlFetch.com')
            .get('/graphql/delay')
            .query(true)
            .times(100)
            .delay(100)
            .reply(200);
    });
    afterEach(() => {
        nock.cleanAll();
    });
    it('should send request ', () => {
        const query = new GraphQLQuery(``)
        return query.fetch()
            .then((res) => {
                expect(res).to.include({ status: 200 });
            });
    });
    it('should send request with variables', () => {
        const query = new GraphQLQuery(``, { page: 1 })
        return query.fetch()
            .then((res) => {
                expect(res).to.include({ status: 200 });
            });
    });
    it('should cancel the prev request ', (done) => {
        const query = new GraphQLQuery(``)
        const queryCl = sinon.spy();
        query.fetch()
            .then(queryCl);
        query.reFetch()
            .then(() => {
                expect(queryCl.notCalled).to.be.true;
                done();
            });
    });
    describe('smarth fetch', () => {
        it('shouldUpdate must be false if smartFetch is enabled', () => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql',
                smartFetch: true,
            })
            const query = new GraphQLQuery(``, {}, environment)
            return query.fetch()
                .then((res) => {
                    expect(res).to.include({ status: 200 });
                    expect(query.shouldUpdate()).to.false;
                });
        });
        it('should not refetch if params didn\'t change', () => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql',
                smartFetch: true,
            })
            const query = new GraphQLQuery(``, {}, environment)
            return query.fetch()
                .then((res) => {
                    expect(query.shouldUpdate()).to.be.false;
                    query.fetch().then((res) => {
                        expect(res).to.be.undefined;
                    })
                });
        });
        it('should refetch if params change', () => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql',
                smartFetch: true,
            });
            const query = new GraphQLQuery(``, {}, environment)
            query.fetch()
                .then((res) => {
                    expect(query.shouldUpdate()).to.false;
                    query.fetch().then((res) => {
                        expect(res).to.be.undefined;
                        query.setParams({
                            id: 2,
                        });
                        expect(query.shouldUpdate()).to.true;
                        query.fetch().then((res) => {
                            expect(res).to.include({ status: 200 });
                        });
                    });
                });
        });
    })
    describe('isPending', () => {
        it('isPending value should be right', (done) => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql/delay',
            });
            const query = new GraphQLQuery(``, {}, environment);
            query.fetch()
                .then((res) => {
                    expect(query.isPending()).to.be.false;
                    done();
                });
            expect(query.isPending()).to.be.true;
        });
    })
    describe('Polling', () => {
        it('should cancel the prev request and stop intervall', (done) => {
            const query = new GraphQLQuery(``)
            const queryCl = sinon.spy();
            query.poll(50).fetch(queryCl)
            query.fetch().then((resp) => {
                setTimeout(() => {
                    expect(queryCl.notCalled).to.be.true;
                    done();
                }, 200);
            })
        });
        describe('isUpdating', () => {
            it('should return true if updating', (done) => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql/delay',
                    smartFetch: true,
                });
                const query = new GraphQLQuery(``, {}, environment);
                query.poll(100).fetch().then(() => {
                    setTimeout(() => {
                        expect(query.isUpdating()).to.be.true;
                        query.cancel();
                        done();
                    }, 120);
                });

            });
            it('should return false if not updating', () => {
                const query = new GraphQLQuery(``);
                return query.poll(100).fetch().then(() => {
                    expect(query.isUpdating()).to.be.false;
                    query.cancel();
                });
            });
            it('should return false if polling is canceled', (done) => {
                const query = new GraphQLQuery(``);
                const spy = sinon.spy();

                query.poll(100).fetch(spy).catch(() => {
                    expect(query.isUpdating()).to.be.false;
                    done();
                });
                query.cancel();
            });
        })
        it('should call cl 3 times', (done) => {
            const query = new GraphQLQuery(``);
            const cs = sinon.spy();
            query.poll(100).fetch(cs);

            setTimeout(() => {
                expect(cs.callCount).to.be.equal(3);
                query.cancel();
                done();
            }, 300);
        });
        describe('smarth fetch', () => {
            it('shouldUpdate must be false if smartFetch is enabled', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartFetch: true,
                })
                const query = new GraphQLQuery(``, {}, environment)
                return query.poll(100).fetch()
                    .then((res) => {
                        expect(res).to.include({ status: 200 });
                        expect(query.shouldUpdate()).to.false;
                        query.cancel();
                    });
            });

            it('should not refetch if params didn\'t change', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartFetch: true,
                })
                const query = new GraphQLQuery(``, {}, environment)
                return query.poll(100).fetch()
                    .then((res) => {
                        expect(query.shouldUpdate()).to.false;
                        query.reFetch().then((res) => {
                            expect(res).to.be.undefined;
                        })
                        query.cancel();
                    });
            });
            it('should refetch if params didn\'t change and use forceFetch', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartFetch: true,
                })
                const query = new GraphQLQuery(``, {}, environment)
                return query.poll(100).fetch()
                    .then((res) => {
                        expect(query.shouldUpdate()).to.false;
                        query.fetch().then((res) => {
                            expect(res).to.be.undefined;
                        });
                        query.forceFetch().then(res => {
                            expect(res).to.not.be.undefined;
                        });
                        query.cancel();
                    });
            });
            it('should refetch if params change', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartFetch: true,
                });
                const query = new GraphQLQuery(``, {}, environment)
                query.poll(100).fetch()
                    .then((res) => {
                        expect(query.shouldUpdate()).to.false;
                        query.fetch().then((res) => {
                            expect(res).to.be.undefined;
                            query.setParams({
                                id: 2,
                            })
                            expect(query.shouldUpdate()).to.true;
                            query.fetch().then((res) => {
                                expect(res).to.include({ status: 200 });
                            })
                        })
                        query.cancel();
                    });
            });
        })
    })

    describe('Setters', () => {
        it('setEnvironment: should change the url', (done) => {
            const query = new GraphQLQuery(``)
            query.fetch()
                .then((res) => {
                    expect(res.config.url).to.be.equal('http://graphqlFetch.com/graphql');
                    const environment = new Environment({
                        url: 'http://graphqlFetch.com/graphql/delay',
                    });
                    query.setEnvironment(environment);
                    query.fetch()
                        .then((res) => {
                            expect(res.config.url).to.be.equal('http://graphqlFetch.com/graphql/delay');
                            done();
                        })
                });
        });
        it('setParams: should change the params', (done) => {
            const query = new GraphQLQuery(``, { id: 1 })
            query.fetch()
                .then((res) => {
                    expect(res.config.params.variables).to.include({ id: 1 });

                    query.setParams({ id: 2 });
                    query.fetch()
                        .then((res) => {
                            expect(res.config.params.variables).to.include({ id: 2 });
                            done();
                        })
                });
        });
        it('setQuery: should change the query', (done) => {
            const queryString = `query($id: String){ products(id:$id){id} }`;
            const query = new GraphQLQuery(queryString, { id: 1 });
            query.fetch()
                .then((res) => {
                    expect(res.config.params).to.include({ query: queryString });
                    expect(res.config.params.variables).to.include({ id: 1 });

                    const newQueryString = `query($title: String){ categories(filter:{title:$title}){id} }`;

                    query.setQuery(newQueryString);
                    query.fetch()
                        .then((res) => {
                            expect(res.config.params.variables).to.include({ id: 1 });
                            expect(res.config.params).to.include({ query: newQueryString });
                            done();
                        })
                });
        });
    })
});