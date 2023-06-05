class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    eat() {
        print(`${this._name} is eating.`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }

    get breed() {
        return this._breed;
    }

    bark() {
        print(`${this._name} is barking.`)
    }
}

const animal = new Animal("Leo");
console.log(animal.name);
animal.eat();

// Create an instance of Dog
const dog = new Dog("Max", "Labrador");
console.log(dog.name);
console.log(dog.breed);
dog.eat();
dog.bark();