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
        choices: ["MIT","GNU GPLv3","Apache-2.0","ISC"]    
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
    // function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers){
        const response =  generateMarkdown(answers);
        console.log(response);
        fs.writeFile("ReadMe.md", response, (err) => {
          if (err) {
              throw err;
            }
        });
    });
  }
  // function call to initialize program
  init();
});


