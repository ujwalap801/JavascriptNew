## A callback function is a function passed as an argument to another function. This function is invoked or called after some operation has been completed. Callbacks are often used to handle asynchronous operations, such as API requests, timers, or event handling in programming.

Here’s a simple example of a callback function in JavaScript:

# Example:

// A function that takes another function as a parameter
function processUserInput(callback) {
  const name = "Ujwala";
  // Now call the callback function
  callback(name);
}

// A function to be passed as the callback
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Using the callback
processUserInput(greet);

# Explanation:
processUserInput is the main function, which takes callback as an argument.
The callback (in this case, greet) is executed inside processUserInput with the argument name.





## Garbage Collection (GC) and removing event listeners are both essential concepts in memory management and performance optimization in programming, particularly in environments like JavaScript.

# 1. Garbage Collection (GC)
Garbage Collection is a process where the runtime environment (such as JavaScript's V8 engine) automatically reclaims memory that is no longer in use, freeing up resources to prevent memory leaks. In languages like JavaScript, memory management is handled automatically via garbage collection, unlike in languages like C++ where developers manually manage memory.

## How Garbage Collection Works:
Reference Counting: An object is considered alive if it is still being referenced by another object or variable. When there are no more references to an object, it can be garbage collected.
Mark-and-Sweep Algorithm: Modern JavaScript engines use this algorithm where the GC starts at the root (like the global window object) and traces references to other objects. Unreachable objects are collected and their memory is freed.


## Example:
function createObject() {
  let obj = { name: "Ujwala" };
  return obj;  // The reference to the object is returned
}

let user = createObject();
// user is still referencing the object, so it's not garbage collected

user = null;
// Now the object can be garbage collected because there are no references to it


## 2. Event Listeners and Memory Leaks
An event listener is a function that gets called when a specific event occurs (like a click or mouseover). In JavaScript, you can add event listeners to elements using addEventListener. However, failing to remove event listeners when they're no longer needed can cause memory leaks, as the event listener will keep a reference to the object, preventing the GC from freeing it.

# Example of Adding and Removing Event Listeners:

// Adding an event listener
function handleClick() {
  console.log('Button clicked!');
}

let button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

// Removing the event listener when it's no longer needed
button.removeEventListener('click', handleClick);

# Why You Should Remove Event Listeners:
Memory Leaks: Event listeners keep references to their target objects. If you don't remove them, even if the DOM element is removed, the listener will still exist, and the object will not be garbage collected.


let element = document.getElementById('myElement');
element.addEventListener('click', () => {
    console.log('clicked');
});

// If you remove the element from the DOM without removing the listener:
element.remove();  // The element is gone, but its event listener may still exist.

# Performance:
 Accumulating unused event listeners can degrade performance, especially in large or complex applications where a lot of event listeners are created.

# Best Practice:
Always remove event listeners when they are no longer needed or when the element is removed from the DOM to allow proper garbage collection.


// Example of removing an element and its event listener
let element = document.getElementById('myElement');

function handleClick() {
  console.log('Element clicked');
}

// Add event listener
element.addEventListener('click', handleClick);

// Later in the code, remove event listener and element
element.removeEventListener('click', handleClick);
element.remove();  // Element is removed from the DOM