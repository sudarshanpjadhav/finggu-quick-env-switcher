const { finggu_loadConfig } = require('./fingguConfigLoader');
const { FINGGU_DEFAULT_ENV } = require('./fingguConstants');

class FingguEnvManager {
    constructor() {
        this.currentEnv = FINGGU_DEFAULT_ENV;
        this.configs = {};
    }

    loadEnvironment(env) {
        this.configs[env] = finggu_loadConfig(env);
        this.currentEnv = env;
    }

    getCurrentConfig() {
        return this.configs[this.currentEnv];
    }
}

module.exports = { FingguEnvManager };