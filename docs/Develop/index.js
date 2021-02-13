// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const api = require('docs\Develop\utils\api.js');
const generateMarkdown = require('docs\Develop\utils\generateMarkdown.js');


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
    {
        type: 'input',
        message: "If necessasary, expalin the steps to installing your project.",
        name: 'Installation'
    },
    {
        type: 'input',
        message: "Here you can give instructions and examples of how your app is used.",
        name: 'Usage'
    },
    {
        type: 'input',
        message: "Here is were you can explain how other developers can contribute to your project.",
        name: 'Contributing'
    },
    {
        type: 'input',
        message: "Give examples of how your test runs",
        name: 'Tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'License'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Yay! You can now see your README.md")
    });
}

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
async function init() {
    try {

    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log("Thank you for your responses! Fetching your GitHub data next...");

    const userInfo = await api.getUser(userResponses);
    console.log("Your GitHub user info: ", userInfo);

    console.log("Generating your README next...")
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    await writeFileAsync('ExampleREADME.md', markdown);

} catch (error) {
    console.log(error);
}
}

// Function call to initialize app
init();
