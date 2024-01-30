//  packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const { SVG } = require('./svg');
const { Shapes, Circle, Triangle, Square } = require('./shapes');

const CIRCLE_TXT = 'circle';
const TRI_TXT = 'triangle';
const SQ_TXT = 'square';


// Creates an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter text for logo. (Must not be more than 3 characters)',
    name: 'logo',
    // validating the # of characters entered
    validate: (value) => {
        if (value.length > 3) {
            return 'Must not be more than 3 characters';
        }
        return true;
    },
},
{
    type: 'input',
    message: 'Enter text color',
    name: 'color',
},
{
    type: 'list',
    message: 'Select shape for the logo (use arrow keys)',
    choices: [CIRCLE_TXT, SQ_TXT, TRI_TXT],
    name: 'shape',

},
{
    type: 'input',
    message: 'Enter shape color',
    name: 'shapeColor',
}];


// Creates a function to write logo.svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Generated logo.svg successful!")
    });
}

// Creates a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const svg = new SVG();
            var shape = new Shapes();


            if (response.shape === CIRCLE_TXT) {
                shape = new Circle();
            } else if (response.shape === TRI_TXT) {
                shape = new Triangle();
            } else {
                shape = new Square();
            }

            shape.setColor(response.shapeColor);
            svg.setShape(shape);
            svg.setText(response.logo, response.color);
            writeToFile('logo.svg', svg.render());
        });
}

// Function call to initialize app
init();
