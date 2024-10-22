##  JS Engine is Not a Machine


## 1) JavaScript Engine:

### A program that executes JavaScript by converting it into machine code.
### Early engines interpreted code line-by-line (interpreted language).
### Modern engines use JIT (Just-In-Time) compilation, where code is compiled to machine code during runtime for better performance.


## 2)JavaScript Runtime Environment:

### The environment where JavaScript runs (e.g., browser or Node.js).
### Includes the JavaScript engine, event loop, and APIs.
### Essential for executing both client-side (browser) and server-side (Node.js) JavaScript.


## 3)Interpreted vs. Compiled:

### JavaScript is traditionally interpreted, meaning it's executed directly line-by-line.
### With JIT, modern engines compile frequently used code into machine code for faster execution.
### JavaScript is now a mix of interpreted and compiled.

## 4)JIT Compilation:

### Starts by interpreting code.
### Identifies "hot" (frequently executed) code and compiles it to machine code on-the-fly.
### Optimizes performance based on runtime data, making code run faster.

## Advantages of JIT:

###  Execution: Code that is compiled runs nearly at native speed.
### Optimized Performance: Adapts to real-time execution patterns.

## Examples of JIT Engines:
### Google V8: Used in Chrome and Node.js.
### SpiderMonkey: Used in Mozilla Firefox.