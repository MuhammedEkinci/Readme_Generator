const inquirer = require("inquirer");
var fs = require("fs");

// Questions
const questions = [
    {
        type: "input",
        name: "github",
        message: "What's your username on github",
    },
    {
        type: "list",
        name: "license",
        message: `What kind of license does your project have`,
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
        message: `Can you tell me about your project?`,
    },

    {
        type: "input",
        message: `Give instructions on how to install.`,
        name: "install",
    },

    {
        type: "input",
        message: `What makes a program run and allows memory to be ______?`,
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
        message: "what are we running",
    },
];