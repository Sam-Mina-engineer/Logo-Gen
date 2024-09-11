const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function generateLogo(text, textColor, shape, shapeColor) {
  let shapeElement;

  switch (shape) {
    case 'Circle':
      shapeElement = new Circle();
      break;
    case 'Triangle':
      shapeElement = new Triangle();
      break;
    case 'Square':
      shapeElement = new Square();
      break;
  }

  shapeElement.setColor(shapeColor);

  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) => input.length <= 3 || 'Text must be up to 3 characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hex):',
  }
])
.then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  generateLogo(text, textColor, shape, shapeColor);
});

