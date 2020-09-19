const inquirer = require("inquirer");
var fs = require("fs");

// Questions
inquirer.prompt([
    {
        type: "input",
        name: "github",
        message: "What's your username on github",
    },
    {
        type: "list",
        name: "license",
        message: `What kind of license does your project have`,
        choice: ["Open Source", "Public Domain", "MIT License", "Apache License", "GPL License"]
    },
    {
        type: "input",
        name: "email",
        message: `What's your email address?`,
    },
    {
        type: "input",
        name: "title",
        message: `What is your project's name?`,
    },
    {
        type: "input",
        name: "descriptions",
        message: `describe your project?`,
    },

    {
        type: "input",
        message: `How can someone install your program?`,
        name: "install",
    },

    {
        type: "input",
        message: `What is this project used for?`,
        name: "usage",
    },
    {
        type: "input",
        name: "contributing",
        message: `Who's a contributor for this project?`,
    },
    {
        type: "input",
        name: "test",
        message: "what are you testing?",
    },
]).then(answer => {
    const { title, badge, blurb, description, installation, usage, contributing, screenshot, test, github, githubURL, authors, linkedinURL, twitter, twitterURL, email, license } = answers;
});


