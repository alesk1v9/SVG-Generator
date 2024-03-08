const {Shapes, Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const circle = new Circle('SVG','white','green');
        expect(circle.render()).toEqual(`
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="green" />
        <text x="150" y="125" font-size="75" text-anchor="middle" fill="white">SVG</text>
    </svg>`
);
    });
});

describe('Square', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const square = new Square('svg','red','blue');
        expect(square.render()).toMatch(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="75" text-anchor="middle" fill="red">svg</text>
        </svg>`
        );
    });
});

describe('Triangle', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const triangle = new Triangle('svg','gray','yellow');
        expect(triangle.render()).toMatch(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="yellow"/>
            <text x="100" y="185" font-size="75" text-anchor="middle" fill="gray">svg</text>
        </svg>`
        );
    });
});