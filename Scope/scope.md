# In JavaScript, let and var are used for variable declarations, but they behave differently in terms of scope and hoisting. Here's an explanation of each:

### scope means where we can access specific variables and functions in a code

## 1. var
# Scope:
var is function-scoped, meaning it is limited to the function in which it is declared. If declared outside any function, it becomes globally scoped.

It ignores block scope (like in loops or if-else blocks) and can be accessed outside the block in which it was declared.
Example:

if (true) {
  var x = 10;
}
console.log(x); // 10, because var is not block-scoped

# Hoisting:
Variables declared with var are hoisted to the top of their scope. However, their value is undefined until they are initialized.

console.log(a); // undefined, because a is hoisted
var a = 5;


## 2. let
# Scope:

let is block-scoped, meaning it is only available within the block (delimited by {}) where it is declared, such as loops, if statements, etc.

Example:
if (true) {
  let y = 20;
}
console.log(y); // Error: y is not defined, because let is block-scoped

# Hoisting:
Like var, let declarations are hoisted. However, let variables are not initialized during hoisting, and accessing them before declaration results in a ReferenceError.

console.log(b); // ReferenceError, b is in the temporal dead zone
let b = 10;