# Shadowing in JavaScript occurs when a variable declared within a certain scope (like a function or block) has the same name as a variable declared in an outer scope. When this happens, the inner variable "shadows" or hides the outer variable, making the outer variable inaccessible from the inner scope.

Here’s how shadowing works for the three types of variable declarations: var, let, and const.

## 1. Using var
Variables declared with var are function-scoped or globally-scoped, and they can be re-declared and updated. However, shadowing can occur within functions or blocks:

var x = 10; // outer scope

function example() {
    var x = 20; // inner scope (shadows outer x)
    console.log(x); // 20
}

example();
console.log(x); // 10


## 2. Using let
Variables declared with let are block-scoped and cannot be re-declared in the same scope. Shadowing can still occur, but the inner variable remains confined to its block:

let x = 10; // outer scope

if (true) {
    let x = 20; // inner scope (shadows outer x)
    console.log(x); // 20
}

console.log(x); // 10

## 3. Using const
Like let, variables declared with const are block-scoped and cannot be re-declared in the same scope. They must also be initialized at the time of declaration. Shadowing works similarly:

const x = 10; // outer scope

if (true) {
    const x = 20; // inner scope (shadows outer x)
    console.log(x); // 20
}

console.log(x); // 10

## Summary
var: Function or global scope, can be re-declared and updated; allows shadowing.
let: Block scope, cannot be re-declared in the same scope; allows shadowing.
const: Block scope, must be initialized at declaration, cannot be re-declared or updated; allows shadowing.