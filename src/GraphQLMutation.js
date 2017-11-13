import GraphQLHandler from './GraphQLHandler';
import { mutationLockMessage } from './lib/config';

class GraphQLMutation extends GraphQLHandler {
    shouldMutate = () => this.canUpdate
    poll = (time = this.pollingTime) => {
        this.pollingTime = time;

        return ({
            mutate: (cl = this.pollingCl) => {
                this.pollingCl = cl;

                if (!this.shouldMutate() && this.environment.options.smartMutate) {
                    /* istanbul ignore next */
                    if (process.env.NODE_ENV !== 'production') {
                        console.warn(mutationLockMessage);
                    }
                    return Promise.resolve();
                }
                this.canUpdate = false;
                return this.request.poll(time).post(cl);
            },
            forceMutate: cl => this.request.poll(time).post(cl),
        });
    }
    reMutate = () => {
        if (this.isPolling()) {
            return this.poll().mutate();
        }
        return this.mutate();
    }
    forceMutate = () => {
        if (this.isPolling()) {
            return this.request.poll(this.pollingTime).post(this.pollingCl);
        }
        return this.request.post();
    }
    mutate = () => {
        if (!this.shouldMutate() && this.environment.options.smartMutate) {
            /* istanbul ignore next */
            if (process.env.NODE_ENV !== 'production') {
                console.warn(mutationLockMessage);
            }
            return Promise.resolve();
        }
        this.canUpdate = false;
        return this.forceMutate();
    }
}

export default GraphQLMutation;
