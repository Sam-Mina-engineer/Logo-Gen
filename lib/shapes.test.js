const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should render a circle with the given color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Triangle', () => {
  test('should render a triangle with the given color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Square', () => {
  test('should render a square with the given color', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toBe('<rect x="90" y="40" width="120" height="120" fill="blue" />');
  });
});
