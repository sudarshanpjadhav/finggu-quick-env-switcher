const inquirer = require('inquirer');

async function finggu_promptUser(envManager) {
    const choices = Object.keys(envManager.configs);
    const questions = [{
        type: 'list',
        name: 'env',
        message: 'Select an environment:',
        choices: choices
    }];

    const answers = await inquirer.prompt(questions);
    envManager.loadEnvironment(answers.env);
    console.log(`Loaded environment: ${answers.env}`);
}

module.exports = { finggu_promptUser };