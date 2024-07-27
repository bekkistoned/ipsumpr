// Example usage:
let base = 10;
let logFunction = returnLogFunction(base);

console.log(logFunction(100));  // Output: 2 (log base 10 of 100 is 2)

base = 2;
logFunction = returnLogFunction(base);

console.log(logFunction(8));  // Output: 3 (log base 2 of 8 is 3)

base = Math.E;
logFunction = returnLogFunction(base);

console.log(logFunction(Math.E * Math.E));  // Output: 2 (ln(e^2) is 2)
