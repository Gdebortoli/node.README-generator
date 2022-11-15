// Packages needed for this application to run 
// File Systems
const fs = require('fs');
// Inquirer Variable
const inquirer = require('inquirer');
// Importing exports from the generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');
// const renderLicenseBadge = require('./utils/generateMarkdown');
// const renderLicenseSection = require('./utils/generateMarkdown');

// Questions
const promptUser = () => {
    console.log(`
=======================================================================
Please answer the following questions to create a new README.md file. 
Not all of the questions are required but a professional README.md is 
descriptive, concise, and Organized. Good Luck!
=======================================================================
`);
return inquirer.prompt([
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
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        }, 
        {
            type: 'input',
            name: 'usage',
            message:'How does the project work?'
        }, 
        {
            type: 'input',
            name: 'contributing',
            message:'How can users contribute to the project?'
        }, 
        {
            type: 'input',
            name: 'tests',
            message:'Did you run any tests on your project? If so, please explain the steps required to run them and any examples if available.'
        }, 
        {
            type: 'input',
            name: 'credits',
            message:'Please list the names of contributors who collaborated with you on this project.'
        }, 
        {
            type: 'list',
            name: 'license',
            message:'What license type did you use for this project? select an option',
            choices: ['Apache', 'BSD', 'MIT', 'Mozilla', 'ISC', 'Other', 'None']
        }, 
        {
            type: 'input',
            name: 'questions',
            message:'Please enter your email address'
        },
        {
            type: 'input',
            name: 'github',
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
    ])
// TODO: Create a function to write README file
    .then(answers => {
        console.log(answers);
        fs.writeFileSync("./dist/README.md", generateMarkdown(answers))
        }
    )};
// TODO: Create a function to initialize app// Function call to initialize app
        promptUser();
        


  

