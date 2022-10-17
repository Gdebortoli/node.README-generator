// Inquirer Variable
const inquirer = require('inquirer');
// Importing exports from the generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');
// File Systems
const fs = require('fs');

// Questions
const questions = [
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
            type: 'checkbox',
            name: 'license',
            message:'What license type did you use for this project?',
            choices: ['Apache', 'BSD', 'GNU','MIT', 'Mozilla', 'ISC', 'Other']
        }, 
        {
            type: 'input',
            name: 'questions',
            message:'Please enter your GitHub username'
        }, 
        {
            type: 'input',
            name: 'questions',
            message:'Please enter your email address'
        }
    ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./${fileName}.md', generateMarkdown(data), err => {
        if (err) throw err;
        console.log('The file has been Created!');
    });
}
// TODO: Create a function to initialize app
function init() { 
    const promptUser = () => {
        return inquirer.prompt(questions)
        .then(answers => {
            return answers;
        });
    };
    promptUser()
    .then(answers => {
        return generateMarkdown(answers)
    })
    .then(response => {
        fs.writeFile("./dist/README.md", respons, e)
    })
}

// Function call to initialize app
console.log(`
=======================================================================
Please answer the following questions to create a new README.md file. 
Not all of the questions are required but a professional README.md is descriptive, concise, 
and Organized. Good Luck :)
=======================================================================
`)
init();
