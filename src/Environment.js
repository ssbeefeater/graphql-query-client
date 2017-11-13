export default class Environment {
    constructor(options) {
        this.options = {};
        this.setOptions(options);
    }
    setOptions = (options = {}) => {
        this.options = Object.assign({}, this.options, options);
    }
}

export const defaultEnvironment = new Environment();

export const setupEnvironment = (options) => {
    defaultEnvironment.setOptions(options);
};
