// TODO: Include packages needed for this application
// File Systems 
const fs = require('fs');
// Inquirer
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a short/ breif description of the project you are working on?'
    },
    {
        type: 'input',
        name: '',
        message: 'What was your motivation?', 'Why did you decide to build this project?', 'What problem does it solve?', 'What did you learn from this project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
