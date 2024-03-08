// packages needed 
const fs = require("fs");
const inquirer = require("inquirer");
const setShape = require('./lib/setShape');
const fileName = './examples/logo.svg';

//questions

const questions = [
    {
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shapeChoice'
    },

    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor'
    },
    {
        type: 'input',
        message: 'What text would you like in your SVG? (3 characters max)',
        name: 'svgText',
        validate: function(input) {
            if (input.length > 3) {
                return "Please insert no more than 3 characters";
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'svgTextColor'
    }
];

const init = () => {
    inquirer.prompt(questions)
    .then((response) => {
        // createLogo(response);
        const svg = setShape(response);
        fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'))
    })
    .catch(err => {
        console.log(err)
    });
}

init();