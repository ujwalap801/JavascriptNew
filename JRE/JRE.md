##  JS Engine is Not a Machine


## 1) JavaScript Engine:

### A program that executes JavaScript by converting it into machine code.
### Early engines interpreted code line-by-line (interpreted language).
### Modern engines use JIT (Just-In-Time) compilation, where code is compiled to machine code during runtime for better performance.
### V8 engine is used in google broswer, nodejs
### first engine is spidermonkey in firebox

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
### Identifies "hot" (frequently executed) code and compiles. In JIT compilation, when the engine finds frequently used code, it quickly converts that code into faster machine code while the program keeps running. This improves performance without needing to pause or restart the program.
### Optimizes performance based on runtime data, making code run faster.

## Advantages of JIT:

###  Execution: Code that is compiled runs nearly at native speed.
### Optimized Performance: Adapts to real-time execution patterns.

## Examples of JIT Engines:
### Google V8: Used in Chrome and Node.js.
### SpiderMonkey: Used in Mozilla Firefox.




## 1. JS runtime environment contains all elements required to run JS.

## 2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.

## 3. JS engine is a piece of code.

## 4. Process includes Parsing ---> Compilation -----> Execution.

## 5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).

## 6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.

## 7. Execution and Compilation are done together.


## 8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
