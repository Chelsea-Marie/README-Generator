// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidleines?"
    },
    {
        type: "input",
        name: "instructions",
        message: "What are the test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to apply to this project?",
        choices: [
            "MIT",
            "Mozilla Public License 2.0",
            "Apache 2.0 License"
        ]
    },
    {
        type: "input",
        name: "questions",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email contact for questions?"
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers)

        const template = generateMarkdown(answers)

        fs.writeFile("README.md", template, function() {
            console.log("README successfully created!")
        })

    })
}

// Function call to initialize app
init();
