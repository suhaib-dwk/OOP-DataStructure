// Abstract class representing a Vehicle
class Vehicle {
    calculateSpeed() {
        throw new Error("Method 'calculateSpeed' must be implemented.");
    }
}

// Concrete class representing a Car
class Car extends Vehicle {
    calculateSpeed() {
        console.log("Calculating speed of the car...");
        // Perform the specific speed calculation for a car
    }
}

// Concrete class representing a Bicycle
class Bicycle extends Vehicle {
    calculateSpeed() {
        console.log("Calculating speed of the bicycle...");
        // Perform the specific speed calculation for a bicycle
    }
}

// Usage

const car = new Car();
car.calculateSpeed(); // Output: Calculating speed of the car...

const bicycle = new Bicycle();
bicycle.calculateSpeed(); // Output: Calculating speed of the bicycle...
