class Shape {
    calculateArea() {
        console.log("Calculating area of shape...");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this._radius = radius;
    }

    calculateArea() {
        const area = Math.PI * Math.pow(this._radius, 2);
        console.log(`Area of circle: ${area.toFixed(2)}`);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }

    calculateArea() {
        const area = this._width * this._height;
        console.log(`Area of rectangle: ${area}`);
    }
}

// Create instances of different shapes
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

// Call the calculateArea() method on each shape
circle.calculateArea(); // Output: Area of circle: 78.54
rectangle.calculateArea(); // Output: Area of rectangle: 24
