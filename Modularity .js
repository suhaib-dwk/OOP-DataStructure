// module.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// main.js
import { add, subtract } from './module.js';

const result1 = add(5, 3);
console.log(result1); // Output: 8

const result2 = subtract(10, 4);
console.log(result2); // Output: 6