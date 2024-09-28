# A function that returns a function or takes other functions as arguments is called a higher-order function

# A higher-order function in JavaScript (and other programming languages) is a function that meets one of the following criteria:

It takes one or more functions as arguments.
It returns a function as its result.


# Higher-order functions are powerful tools in functional programming, enabling abstraction and code reuse. They allow for more concise and expressive code by treating functions as first-class citizens.



# Summary
Higher-order functions enable more modular, reusable, and expressive code. They allow you to encapsulate behavior, pass around functions, and apply operations to data in a functional programming style.




# Example 1: Function that Returns a Function

// A higher-order function that returns another function
function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    };
}

// Create a function that doubles the input
const double = createMultiplier(2);

// Create a function that triples the input
const triple = createMultiplier(3);

// Using the functions
console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15


# Code Breakdown
Defining the Higher-Order Function:

function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    };
}

createMultiplier is a higher-order function because it takes an argument (multiplier) and returns another function.

The returned function takes a parameter x and multiplies it by the multiplier provided to createMultiplier.
This allows you to create specialized multiplication functions by passing different multipliers.

# Creating Specific Multiplier Functions:
const double = createMultiplier(2);
Here, double is created by calling createMultiplier with 2 as the argument.
This means double is now a function that takes a number x and returns x * 2.

const triple = createMultiplier(3);
Similarly, triple is created by calling createMultiplier with 3.
The triple function will take a number x and return x * 3.
Using the Functions:

console.log(double(5)); // Outputs: 10
When double(5) is called, it executes the inner function returned by createMultiplier(2).
The value of x is 5, so the calculation is 5 * 2, which results in 10.
The output 10 is printed to the console.
javascript

console.log(triple(5)); // Outputs: 15
When triple(5) is called, it executes the inner function returned by createMultiplier(3).
Here, x is again 5, so the calculation is 5 * 3, resulting in 15.
The output 15 is printed to the console.


## Higher-order function that takes a callback and a value
function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

// A callback function to log the message
function logMessage(msg) {
    console.log(msg);
}

// Using the higher-order function
greet("Alice", logMessage); // Outputs: Hello, Alice!

# Code Breakdown
Defining the Higher-Order Function:


function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

# The greet function is a higher-order function because it takes a function (callback) as one of its parameters.
It also takes a name parameter, which is a string representing the name of the person to greet.
Inside greet, a message is created using template 

# literals: const message = \Hello, ${name}!`;. This constructs a greeting message that incorporates the provided name`.
After creating the message, the callback function is called with the message as its argument, allowing the caller to define what should be done with that message.

# Defining the Callback Function:

function logMessage(msg) {
    console.log(msg);
}
The logMessage function is a simple callback function that takes one parameter (msg).
When called, it logs the message to the console using console.log(msg);.

# Using the Higher-Order Function:
greet("Alice", logMessage); // Outputs: Hello, Alice!
The greet function is called with two arguments: the name "Alice" and the logMessage function.
Inside greet, the message Hello, Alice! is created.
The logMessage function is then called with this message, which logs Hello, Alice! to the console.