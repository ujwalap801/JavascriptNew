# In JavaScript, let and var are used for variable declarations, but they behave differently in terms of scope and hoisting. Here's an explanation of each:


**Scope** refers to the context in which variables and functions can be accessed in your code.


## 1. `var`

### Scope

- `var` is **function-scoped**, meaning it is limited to the function in which it is declared. If declared outside any function, it becomes **globally scoped**.
- It **ignores block scope** (like in loops or if-else blocks) and can be accessed outside the block in which it was declared.


### Example

```javascript
if (true) {
  var x = 10; // x is declared inside an if block
}
console.log(x); // Outputs: 10, because var is not block-scoped

