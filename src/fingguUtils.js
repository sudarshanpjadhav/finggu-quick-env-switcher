function finggu_isValidEnv(env) {
    const validEnvs = ['development', 'staging', 'production'];
    return validEnvs.includes(env);
}

module.exports = { finggu_isValidEnv };