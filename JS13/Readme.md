# Promises in JavaScript

Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner alternative to callbacks, allowing for better handling of asynchronous code.

## States of a Promise

A promise can be in one of three states:

1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully, resulting in a value.
3. **Rejected**: The operation failed, resulting in a reason for the failure (an error).


## Handling Promises

You can handle the results of a promise using `.then()` for fulfilled promises and `.catch()` for rejected ones:

```javascript
myPromise
    .then(result => {
        console.log(result); // Logs the success message
    })
    .catch(error => {
        console.error(error); // Logs the error message
    });


## Chaining Promises

You can chain multiple promises together:

```javascript
myPromise
    .then(result => {
        console.log(result); // Logs the result of the first promise
        return new Promise((resolve) => {
            setTimeout(() => resolve("Another operation succeeded!"), 1000);
        });
    })
    .then(secondResult => {
        console.log(secondResult); // Logs the result of the second promise
    })
    .catch(error => {
        console.error(error); // Catches any error from the chain
    });
