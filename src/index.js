const { finggu_promptUser } = require('./fingguPrompt');
const { FingguEnvManager } = require('./fingguEnvManager');

const fingguVar_envManager = new FingguEnvManager();

async function finggu_startApp() {
    await finggu_promptUser(fingguVar_envManager);
}

finggu_startApp();