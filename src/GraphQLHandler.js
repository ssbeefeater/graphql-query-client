import Request from 'axios-request-handler';
import isEqual from 'lodash.isequal';
import { defaultEnvironment } from './Environment';

class GraphQLHandler {
    constructor(query, params, environment) {
        const currentEnvironment = environment || defaultEnvironment;
        this.params = {};
        this.setEnvironment(currentEnvironment)
            .setQuery(query)
            .setParams(params);
        this.canUpdate = true;
    }
    setQuery = (query) => {
        this.query = query;
        this.resetParams(this.params);
        return this;
    }
    setEnvironment = (environment) => {
        this.request = new Request();
        this.environment = environment;
        this.setOptions(environment.options);
        return this;
    }
    resetParams = (params) => {
        this.setOptions({
            params: {
                query: this.query,
                variables: params,
            },
        });
    }
    setOptions = (options) => {
        const {
            url,
            ...requestOptions
        } = options;
        this.request.setOptions(requestOptions);
        if (url) {
            this.request.setUrl(url);
        }
        return this;
    }
    setParams = (params) => {
        const newParams = Object.assign({}, this.params, params);

        if (isEqual(this.params, newParams)) {
            return this;
        }
        this.canUpdate = true;
        this.params = newParams;

        this.resetParams(newParams);

        return this;
    }
    isPending = () => this.request.isPending()
    isUpdating = () => this.request.isUpdating()
    isPolling = () => this.request.isPolling()
    cancel = () => {
        this.request.cancel();
        return this;
    }
}

export default GraphQLHandler;
