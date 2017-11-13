import nock from 'nock';
import { GraphQLMutation, setupEnvironment, Environment } from '../src';
describe('GraphQLMutation', () => {
    before(() => {
        setupEnvironment({
            url: 'http://graphqlFetch.com/graphql'
        })
    })
    beforeEach(() => {
        nock('http://graphqlFetch.com')
            .post('/graphql')
            .query(true)
            .times(100)
            .reply(200);
        nock('http://graphqlFetch.com')
            .post('/graphql/delay')
            .query(true)
            .times(100)
            .delay(100)
            .reply(200);
    });
    afterEach(() => {
        nock.cleanAll();
    });
    it('should send request ', () => {
        const mutation = new GraphQLMutation(``);
        return mutation.mutate()
            .then((res) => {
                expect(res).to.include({ status: 200 });
            });
    });
    it('should send request with variables', () => {
        const mutation = new GraphQLMutation(``, { page: 1 })
        return mutation.mutate()
            .then((res) => {
                expect(res).to.include({ status: 200 });
            });
    });
    describe('smarth mutate', () => {
        it('shouldMutate must be false if smartMutate is enabled', () => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql',
                smartMutate: true,
            })
            const mutation = new GraphQLMutation(``, {}, environment)
            return mutation.mutate()
                .then((res) => {
                    expect(res).to.include({ status: 200 });
                    expect(mutation.shouldMutate()).to.false;
                });
        });
        it('should not refetch if params didn\'t change', () => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql',
                smartMutate: true,
            })
            const mutation = new GraphQLMutation(``, {}, environment)
            return mutation.mutate()
                .then((res) => {
                    expect(mutation.shouldMutate()).to.false;
                    mutation.reMutate().then((res) => {
                        expect(res).to.be.undefined;
                    })
                });
        });
        it('should refetch if params change', () => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql',
                smartMutate: true,
            });
            const mutation = new GraphQLMutation(``, {}, environment)
            mutation.mutate()
                .then((res) => {
                    expect(mutation.shouldMutate()).to.false;
                    mutation.mutate().then((res) => {
                        expect(res).to.be.undefined;
                        mutation.setParams({
                            id: 2,
                        })
                        expect(mutation.shouldMutate()).to.true;
                        mutation.mutate().then((res) => {
                            expect(res).to.include({ status: 200 });
                        })
                    })
                });
        });
    })
    describe('isPending', () => {
        it('isPending value should be right', (done) => {
            const environment = new Environment({
                url: 'http://graphqlFetch.com/graphql/delay',
            });
            const mutation = new GraphQLMutation(``, {}, environment);
            mutation.mutate()
                .then((res) => {
                    expect(mutation.isPending()).to.be.false;
                    done();
                });
            expect(mutation.isPending()).to.be.true;
        });
    })
    describe('Polling', () => {
        describe('isUpdating', () => {
            it('should return true if updating', (done) => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql/delay',
                    smartMutate: true,
                });
                const mutation = new GraphQLMutation(``, {}, environment);
                mutation.poll(100).mutate().then(() => {
                    setTimeout(() => {
                        expect(mutation.isUpdating()).to.be.true;
                        mutation.cancel();
                        done();
                    }, 120);
                });

            });
            it('should return false if not updating', () => {
                const mutation = new GraphQLMutation(``);
                return mutation.poll(100).mutate().then(() => {
                    expect(mutation.isUpdating()).to.be.false;
                    mutation.cancel();
                });
            });
            it('should return false if polling is canceled', (done) => {
                const mutation = new GraphQLMutation(``);
                const spy = sinon.spy();

                mutation.poll(100).mutate(spy).catch(() => {
                    expect(mutation.isUpdating()).to.be.false;
                    done();
                });
                mutation.cancel();
            });
        })
        it('should call cl 3 times', (done) => {
            const mutation = new GraphQLMutation(``);
            const cs = sinon.spy();
            mutation.poll(100).mutate(cs);

            setTimeout(() => {
                expect(cs.callCount).to.be.equal(3);
                mutation.cancel();
                done();
            }, 300);
        });
        describe('smarth mutation', () => {
            it('shouldMutate must be false if smartMutate is enabled', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartMutate: true,
                })
                const mutation = new GraphQLMutation(``, {}, environment)
                return mutation.poll(100).mutate()
                    .then((res) => {
                        expect(res).to.include({ status: 200 });
                        expect(mutation.shouldMutate()).to.false;
                        mutation.cancel();
                    });
            });

            it('should not refetch if params didn\'t change', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartMutate: true,
                })
                const mutation = new GraphQLMutation(``, {}, environment)
                return mutation.poll(100).mutate()
                    .then((res) => {
                        expect(mutation.shouldMutate()).to.false;
                        mutation.reMutate().then((res) => {
                            expect(res).to.be.undefined;
                        })
                        mutation.cancel();
                    });
            });
            it('should refetch if params didn\'t change and use forceMutate', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartMutate: true,
                })
                const mutation = new GraphQLMutation(``, {}, environment)
                return mutation.poll(100).mutate()
                    .then((res) => {
                        expect(mutation.shouldMutate()).to.false;
                        mutation.mutate().then((res) => {
                            expect(res).to.be.undefined;
                        });
                        mutation.poll(100).forceMutate().then(res => {
                            expect(res).to.not.be.undefined;
                        });
                        mutation.cancel();
                    });
            });
            it('should refetch if params change', () => {
                const environment = new Environment({
                    url: 'http://graphqlFetch.com/graphql',
                    smartMutate: true,
                });
                const mutation = new GraphQLMutation(``, {}, environment)
                mutation.poll(100).mutate()
                    .then((res) => {
                        expect(mutation.shouldMutate()).to.false;
                        mutation.mutate().then((res) => {
                            expect(res).to.be.undefined;
                            mutation.setParams({
                                id: 2,
                            })
                            expect(mutation.shouldMutate()).to.true;
                            mutation.mutate().then((res) => {
                                expect(res).to.include({ status: 200 });
                            })
                        })
                        mutation.cancel();
                    });
            });
        });
    });

    describe('Setters', () => {
        it('setEnvironment: should change the url', (done) => {
            const mutation = new GraphQLMutation(``)
            mutation.mutate()
                .then((res) => {
                    expect(res.config.url).to.be.equal('http://graphqlFetch.com/graphql');
                    const environment = new Environment({
                        url: 'http://graphqlFetch.com/graphql/delay',
                    });
                    mutation.setEnvironment(environment);
                    mutation.mutate()
                        .then((res) => {
                            expect(res.config.url).to.be.equal('http://graphqlFetch.com/graphql/delay');
                            done();
                        })
                });
        });
        it('setParams: should change the params', (done) => {
            const mutation = new GraphQLMutation(``, { id: 1 })
            mutation.mutate()
                .then((res) => {
                    expect(res.config.params.variables).to.include({ id: 1 });

                    mutation.setParams({ id: 2 });
                    mutation.mutate()
                        .then((res) => {
                            expect(res.config.params.variables).to.include({ id: 2 });
                            done();
                        })
                });
        });
        it('setQuery: should change the query', (done) => {
            const query = `mutation($id: String){ addProduct(id:$id){id} }`;
            const mutation = new GraphQLMutation(query, { id: 1 });
            mutation.mutate()
                .then((res) => {
                    expect(res.config.params).to.include({ query: query });
                    expect(res.config.params.variables).to.include({ id: 1 });

                   const newQuery = `mutation($title: String){ addCategory(title:$title){id} }`;

                    mutation.setQuery(newQuery);
                    mutation.mutate()
                        .then((res) => {
                            console.log(res);
                            expect(res.config.params.variables).to.include({ id: 1 });
                            expect(res.config.params).to.include({ query: newQuery });
                            done();
                        })
                });
        });
    })
});