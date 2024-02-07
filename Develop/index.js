// Import external Node JS modules and js file.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// List of questions to prompt user to answer.
const questions = [
    "Enter your project title",
    "Enter a description",
    "Enter installation instructions",
    "Enter usage information",
    "Enter credits",
    "Choose a license for your application",
    "Enter features of your project",
    "Enter contribution guidelines",
    "Enter test instructions",
    "Enter your GitHub username",
    "Enter your email address"
];

function writeToFile (data) {
    fs.writeFile('sampleREADME.md', data, (err) =>
        err ? console.error(err) : console.log('README file has been successfully created.'))
};

