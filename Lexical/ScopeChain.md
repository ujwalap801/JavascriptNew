# The scope chain in JavaScript refers to the mechanism that determines how variables and functions are resolved in nested scopes.

# When a variable or function is accessed, JavaScript first looks in the current lexical environment (local scope). If it can't find the variable or function there, it continues up the scope chain, moving to the parent lexical environment (outer scope), and continues this process until it either finds the variable or reaches the global scope.

## In short:
The scope chain is the hierarchy of lexical environments that JavaScript uses to look for variable values.
The process goes from the innermost scope outward, ensuring that variables are resolved by moving through the different layers of scopes.
This is why variables defined in an outer function are accessible to inner functions (due to lexical scoping), but not the other way around.



## Example Code

function outerFunction() {
    const outerVariable = "I am outside!";

    function innerFunction() {
        const innerVariable = "I am inside!";
        console.log(outerVariable); // Accessing outerVariable
                                      from outerFunction
        console.log(innerVariable);  // Accessing innerVariable 
                                      from innerFunction
    }

    innerFunction();
}

outerFunction();

// Trying to access the variables outside their scopes
console.log(outerVariable); // ReferenceError: outerVariable is not defined
console.log(innerVariable);  // ReferenceError: innerVariable is not defined

# Breakdown of the Example
outerFunction:
When outerFunction is invoked, it creates a new execution context and a new lexical environment that includes outerVariable.
innerFunction:

When innerFunction is called, it creates another execution context and lexical environment that contains innerVariable. It also has access to the parent lexical environment from outerFunction, which means it can access outerVariable.

## Console Logs Inside innerFunction:

The first console.log(outerVariable); outputs:
css
Copy code
I am outside!

The second console.log(innerVariable); outputs:
css
Copy code
I am inside!

## Scope Chain Access:

When trying to access outerVariable or innerVariable from the global scope (outside of both functions), both will throw a ReferenceError because they are not defined in that scope.

## Summary
The scope chain allows functions to access variables from their own scope and the outer scopes in which they were defined.
This mechanism supports closures, enabling functions to remember their surrounding context, even after the parent function has finished executing.

