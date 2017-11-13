import { queryLockMessage } from './lib/config';
import GraphQLHandler from './GraphQLHandler';

class GraphQLQuery extends GraphQLHandler {
    shouldUpdate = () => this.canUpdate
    poll = (time = this.pollingTime) => {
        this.pollingTime = time;
        return ({
            fetch: (cl = this.pollingCl) => {
                this.pollingCl = cl;
                if (!this.shouldUpdate() && this.environment.options.smartFetch) {
                    /* istanbul ignore next */
                    if (process.env.NODE_ENV !== 'production') {
                        console.warn(queryLockMessage);
                    }
                    return Promise.resolve();
                }
                this.canUpdate = false;
                return this.request.poll(time).get(cl);
            },
        });
    }
    reFetch = () => {
        if (this.isPolling()) {
            return this.poll().fetch();
        }
        return this.fetch();
    }
    forceFetch = () => {
        if (this.isPolling()) {
            return this.request.poll(this.pollingTime).get(this.pollingCl);
        }
        return this.request.get();
    }
    fetch = () => {
        if (!this.shouldUpdate() && this.environment.options.smartFetch) {
            /* istanbul ignore next */
            if (process.env.NODE_ENV !== 'production') {
                console.warn(queryLockMessage);
            }
            return Promise.resolve();
        }
        this.canUpdate = false;
        return this.forceFetch();
    }
}

export default GraphQLQuery;
