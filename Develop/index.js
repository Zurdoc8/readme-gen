// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions =[
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project's title?"
    },
    
    {
        type: "input",
        name: "projectAbout",
        message: "Describe your project"
    },
    
    {
        type: "checkbox",
        name: "techUsed",
        message: "What did you use to build your project?",
        choices: ['HTML', 'CSS', 'javaScript', 'jQuery', 'Bootstrap', 'ES6', 'Node', 'python']
    },

    {
        type: "input",
        name: "howToInstall",
        message: "Describe the installation process"
    },

    {
        type: "input",
        name: "walkThrough",
        message: "How can someone use your application?"
    },

    {
        type: "confirm",
        name: "allowCont",
        message: "Do you allow contribution from fellow coders?",
        default: true
    },

    {
        type: "input",
        name: "contGuidelines",
        message: "If yes, how can someone contribute to your project?",
        when: ({allowCont}) => allowCont
    },

    {
        type: "input",
        name: "test",
        message: "Are we able to test your application?",
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },

    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
    },

    {
        type: "list",
        name: "license",
        message: "What License did you used for this project?",
        choices: ['GNU', 'MIT', 'Open', 'ISC', 'MPL-2.0', 'Apache'],
    },
]

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((answers) => {
        const genFile = generateMarkdown(answers);
        fs.writeFile('./README.md', genFile, err => {
            err ? console.error(err) : console.log('Great Success! README.md file was created!');
        });
    });
};

init();
