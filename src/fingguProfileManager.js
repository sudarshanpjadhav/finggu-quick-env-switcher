class FingguProfileManager {
    constructor() {
        this.profiles = {};
    }

    addProfile(name, config) {
        this.profiles[name] = config;
    }

    getProfile(name) {
        return this.profiles[name];
    }

    listProfiles() {
        return Object.keys(this.profiles);
    }
}

module.exports = { FingguProfileManager };