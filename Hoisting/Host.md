## Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope (global or function) during the compile phase, before the actual code execution. This means that you can use variables and functions before they are declared in the code.

How Hoisting Works:
Variable Hoisting:

Variables declared using var are hoisted to the top of their scope but not initialized. Until the variable is assigned a value, it is set to undefined.
Variables declared with let and const are hoisted, but they remain in a "temporal dead zone" (TDZ) until they are initialized. You cannot access them before their declaration.

## Example with var:

console.log(a);  // Output: undefined
var a = 5;
console.log(a);  // Output: 5

# What happens during hoisting:
var a;  // Declaration is hoisted
console.log(a);  // a is undefined
a = 5;  // Initialization happens here
console.log(a);  // Now a is 5


# Example with let:
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b);  // Output: 10

# Variables declared with let or const cannot be accessed before their declaration, because of the TDZ.

## Function Hoisting:

Function declarations are fully hoisted, meaning both the function declaration and its definition (body) are moved to the top of their scope. This allows you to invoke a function before its declaration.
Function expressions (i.e., functions assigned to a variable) are not fully hoisted. The variable itself is hoisted, but its value (the function) is not.

# Example with function declaration:
greet();  // Output: "Hello!"
function greet() {
  console.log('Hello!');
}


# What happens during hoisting:
function greet() {  // Declaration and definition are hoisted
  console.log('Hello!');
}
greet();  // Can be invoked before the declaration in the code


#Example with function expression:
console.log(sayHello);  // Output: undefined
var sayHello = function() {
  console.log('Hello!');
};
sayHello();  // Output: "Hello!"
Here, the variable sayHello is hoisted, but the function definition is not, so trying to call it before assignment results in undefined.

# Summary of Hoisting:
Variable declarations (var, let, const) and function declarations are hoisted.
Only the declaration is hoisted for variables (var results in undefined; let and const are in the TDZ).
Function declarations can be called before they are declared in the code, as both the declaration and definition are hoisted.
Function expressions behave like variables, where only the variable is hoisted, not the function itself.