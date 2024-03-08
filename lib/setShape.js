const { Shapes, Circle, Square, Triangle } = require('./shapes');

function setShape (response) {
    if (response.shapeChoice === 'Circle') {
        let userShape = new Circle (response.svgText, response.svgTextColor, response.shapeColor);
        return userShape.render()
    }

    if (response.shapeChoice === 'Square') {
        let userShape = new Square (response.svgText, response.svgTextColor, response.shapeColor)
        return userShape.render()
    }

    if (response.shapeChoice === 'Triangle') {
        let userShape = new Triangle (response.svgText, response.svgTextColor, response.shapeColor)
        return userShape.render()
    }
};

module.exports = setShape;