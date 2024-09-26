# `fetch()` Method in JavaScript

The `fetch()` method in JavaScript is used to make network requests and handle responses. It is commonly used for making API requests to retrieve data from or send data to a server. The `fetch()` method returns a **Promise** that resolves once the response is available.

## Key Features of `fetch()`

- The `fetch()` method is a modern way to make asynchronous HTTP requests in JavaScript.
- It returns a **Promise**, allowing you to handle responses using `.then()` and `.catch()`.
- The `fetch()` method does not reject on HTTP errors (such as 404 or 500), only on network failures or if the request is blocked.

## Syntax

```javascript
fetch(url, options);



# Fetch Users Data Example

This is a simple JavaScript function that fetches user data from the `JSONPlaceholder` API and logs it to the console using the `fetch()` method. The code handles both success and error scenarios.

## Usage

1. Copy the function below into your JavaScript file.
2. Call `getData()` to retrieve the users' data from the API.
3. The data will be logged in the browser's console.

### Code Example

```javascript
function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(users => console.log(users))
        .catch((err) => console.error('Fetch error:', err));
}

getData();
