### The scope chain in JavaScript is the mechanism by which variable and function names are resolved in nested scopes. When a variable or function is accessed, JavaScript looks in the following order:

### Local Scope: The current execution context (the innermost scope).

### Outer Scope: If not found in the local scope, JavaScript continues to the outer scope (the parent lexical environment).

### Global Scope: If the variable or function is not found in any of the local or outer scopes, JavaScript finally checks the global scope.



### Scope Chain Access: The function c can access the variable b from the outer function a due to the scope chain. This illustrates lexical scoping, where functions have access to their own scope and the scope of their outer functions.

### Output: When a() is called, it will print 10 to the console because c successfully accesses the variable b from its parent scope.