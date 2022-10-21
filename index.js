// Packages needed for this application to run 
// File Systems
const fs = require('fs');
// Inquirer Variable
const inquirer = require('inquirer');
// Importing exports from the generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');

// Questions
inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? *REQUIRED*',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project and your reasoning for making it?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions on how to run and install your project.'
        }, 
        {
            type: 'input',
            name: 'contributing',
            message:''
        }, 
        {
            type: 'input',
            name: 'tests',
            message:''
        }, 
        {
            type: 'input',
            name: 'Credits',
            message:''
        }, 
        {
            type: 'list',
            name: 'license',
            message:'What license type did you use for this project? select one option',
            choices: ['Apache', 'BSD', 'MIT', 'Mozilla', 'ISC', 'Other']
        }, 
        {
            type: 'input',
            name: 'questions',
            message:'Please enter your GitHub username.*REQUIRED*', 
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'questions',
            message:'Please enter your email address'
        }
    ]).then(answers => {
        console.log(answers);
// TODO: Create a function to write README file
        fs.writeFileSync("./dist/README.md", generateMarkdown(answers))
        }
    );

// TODO: Create a function to initialize app
    function init() { 
    inquirer.prompt(answers)
    .then(function (response) {
        writeToFile(response);
        })
    };
// Function call to initialize app
// console.log(`
// =======================================================================
// Please answer the following questions to create a new README.md file. 
// Not all of the questions are required but a professional README.md is 
// descriptive, concise, and Organized. Good Luck!
// =======================================================================
// `)
    // init();

