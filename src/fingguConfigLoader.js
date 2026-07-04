const dotenv = require('dotenv');

function finggu_loadConfig(env) {
    const result = dotenv.config({ path: `./.env.${env}` });
    if (result.error) {
        throw result.error;
    }
    return result.parsed;
}

module.exports = { finggu_loadConfig };