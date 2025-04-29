// In programming language there are some sorts of instructions designed to perform task that are called statements

// There are types of statements in JavaScript
// 1. Variable Declaration
let name = "Mohan";   // Declaration with 'let'
const age = 25;      // Declaration with 'const' (constant value)
var isActive = true; // Declaration with 'var' (older version)

// 2. Assignment
let num = 10; // Assigning a number
let message = "Hello, World!"; // Assigning a string


// 3. Conditionals
x = y + 10;  // Expression statement
console.log(x); // Expression statement using a function call


// 4. Control Flow
let numer = 10;
if (numer > 5) {
    console.log("Number is greater than 5");
}


// 5. Try Catch
try {
    let result = someUndefinedFunction(); // This will throw an error
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}


// 6. Throw
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
}


// 7.Function Declaration
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alisha"));


// 8.Return Statement
function add(a, b) {
    return a + b;
}