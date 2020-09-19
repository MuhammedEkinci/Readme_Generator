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
];


const tableOfContents = `
## Table of Contents
* [Title](#title)
* [Table of Contents](#TableofContents)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
`

inquirer.prompt(questions).then(data => {
    fs.writeFileSync("README.md", (`# ${data.title} 
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n \n \n`))
    fs.appendFileSync("README.md", (`## Project Description \n \n ${data.descriptions} \n \n \n`))
    fs.appendFileSync("README.md", tableOfContents)
    fs.appendFileSync("README.md", (`## Installation \n \n ${data.install} \n \n \n`))
    fs.appendFileSync("README.md", (`## Contributing \n \n ${data.contributing} \n \n \n`))
    fs.appendFileSync("README.md", (`## Usage \n \n ${data.usage} \n \n \n`))
    fs.appendFileSync("README.md", (`## Tests \n \n ${data.test} \n \n \n`))
    fs.appendFileSync("README.md", (`## My GitHub Profile \n \n ${data.github} \n \n \n`))
    fs.appendFileSync("README.md", (`## My Email Address \n \n ${data.email} \n \n \n`))
    fs.appendFileSync("README.md", (`## Questions \n \n If you have quesitons contact me at ${data.email} \n \n \n`))
    fs.appendFileSync("README.md", (`## License \n \n ${data.license} \n`))
});


