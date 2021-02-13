// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Add your Github username without @ symobol",
        name: 'Username',
        default: 'lgiddings03',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("valid Github username");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Give your repository a name",
        name: 'Repository',
        default: 'readme-generatorReadmeGen',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Must name your repo in order to get a badge");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Breifly describe your project",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Description is required.");
            }
            return true;
        }
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
