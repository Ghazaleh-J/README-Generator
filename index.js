// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'What is your project all about?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What is your application used for?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What kind of license is used?',
        name: 'License',
        choices: ['BSD', 'MIT', 'GPL', 'None']
    },
    {
        type: 'input',
        message: 'What are the guidelines to contributing?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'How can I test your application?',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    },
];

// TODO: Create a function to write README file  /(fileName, data) = previous parameters
function writeToFie(answers) {
    fs.writeFileSync('READMEGen.md', generateReadme(answers))
}


inquirer
  .prompt(questions)
  .then((answers) => {
      console.log(answers)
    writeToFie(answers)
    console.log('Success!')
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment")
    } else {
        console.error("Something else went wrong")
    }
  });
  

  


   
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();