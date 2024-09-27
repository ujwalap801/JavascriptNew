## A lexical environment refers to the structure that stores the association between variables and their values, and it is created whenever a function is executed in JavaScript. It consists of two parts:

# Local memory: 
This is the environment where the function stores its own variables, function arguments, and other locally defined elements.

# Parent lexical environment: 
This refers to the reference to the environment where the function was defined, which includes the variables accessible from the outer scope (i.e., its parent function or global scope). The function has access to these variables due to lexical scoping, meaning the location where a function is written determines the scope it has access to.


## A lexical environment is created whenever an execution context is created in JavaScript. :

Execution Context: Whenever a function is called or the global code starts running, an execution context is created. This contains information like the function's arguments, the value of this, and references to the lexical environment.

Lexical Environment: Inside each execution context, a new lexical environment is created, which holds the variables, function declarations, and the reference to the outer lexical environment (its parent scope). The lexical environment is where variables and functions are stored in memory.

# Each execution context has:

Local Lexical Environment: Variables and functions defined within the current function or block.
Reference to the Parent Lexical Environment: This is the environment of the function or block where the current function is defined.
Thus, whenever a function is called, a new execution context is created, and with it, a new lexical environment that tracks variables and their values at that point in the code.



## Example Code

function createCounter() {
    let count = 0; // This variable is part of the lexical environment of createCounter

    return function increment() {
        count += 1; // Accessing the outer variable 'count'
        console.log(count);
    };
}

const counter1 = createCounter(); // Creates a new lexical environment
const counter2 = createCounter(); // Creates another new lexical environment

// Incrementing counter1
counter1(); // Output: 1
counter1(); // Output: 2

// Incrementing counter2
counter2(); // Output: 1 (separate lexical environment)
counter2(); // Output: 2


## Breakdown of the Example
# Outer Function (createCounter):
When createCounter is called, a new lexical environment is created. This environment contains the variable count, initialized to 0.

# Inner Function (increment):
The increment function is returned from createCounter. It forms a closure, which means it "remembers" the lexical environment of createCounter, allowing it to access the count variable even after createCounter has finished executing.

# Counter Instances:
When counter1 and counter2 are created by calling createCounter, each invocation creates its own separate lexical environment. Each counter has its own count variable.

# Incrementing:
When counter1() is called, it accesses its own count variable, increments it, and logs the value.
When counter2() is called, it accesses its own separate count variable, which is still 0, increments it, and logs the value.

#Output
1
2
1
2

# Summary
Each invocation of createCounter creates a new lexical environment, maintaining its own count variable.
The inner function increment retains access to the count variable of the lexical environment it was created in, demonstrating how closures and lexical environments work together in JavaScript.