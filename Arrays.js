// Creating an array
const numbers = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

// Modifying array elements
numbers[1] = 10;
console.log(numbers); // Output: [1, 10, 3, 4, 5]

// Adding elements to an array
numbers.push(6);
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]

// Removing elements from an array
numbers.pop();
console.log(numbers); // Output: [1, 10, 3, 4, 5]

// Array length
console.log(numbers.length); // Output: 5

// Iterating over an array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Array methods
const fruits = ["apple", "banana", "orange"];
console.log(fruits.join(", ")); // Output: apple, banana, orange
console.log(fruits.slice(1, 3)); // Output: ["banana", "orange"]
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.includes("kiwi")); // Output: false