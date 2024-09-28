## Web APIs in JavaScript are typically accessible through the global object. In browsers, the global object is the window object, meaning that many Web APIs are properties of the window object, making them globally accessible.

# What Is the Global Object?
In a browser environment, the global object is window. Any variables or functions that are declared globally become properties of the window object. 

# For example:
console.log(window.document === document);  // true
console.log(window.alert === alert);        // true

## Web APIs and the Global Object
Web APIs are interfaces provided by the browser that allow developers to interact with the environment. They include APIs for working with:

DOM manipulation (document, element, etc.)
AJAX/HTTP requests (fetch, XMLHttpRequest)
Browser storage (localStorage, sessionStorage)
Geolocation (navigator.geolocation)
Timers (setTimeout, setInterval)
Multimedia (MediaDevices, AudioContext)
Events (Event, EventTarget)
And many more...

## These APIs are typically accessible globally because they are part of the window object. For example:

# fetch:
 The API for making HTTP requests globally available via window.fetch or simply fetch.


fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

# localStorage:
 The Web API for storing key-value pairs in the browser is accessible as window.localStorage or just localStorage.


localStorage.setItem('username', 'ujwala');
console.log(localStorage.getItem('username'));  // 'ujwala'

# setTimeout and setInterval:
 Both are globally available for scheduling function execution after a certain delay or at regular intervals.


setTimeout(() => console.log('Hello after 1 second'), 1000);
setInterval(() => console.log('Repeating every 2 seconds'), 2000);

# Example:
 Accessing Web APIs from the Global Object
You can access Web APIs either directly or through the window object since they are properties of window:


// Direct access
console.log(navigator.geolocation);

// Accessing through the window object (same thing)
console.log(window.navigator.geolocation);

# Global Web APIs
Here are a few commonly used Web APIs that are globally accessible:

DOM APIs: document, Element, querySelector
Storage APIs: localStorage, sessionStorage
Timers: setTimeout, clearTimeout, setInterval, clearInterval
Fetch API: fetch
Navigator API: navigator (for accessing information about the browser, such as geolocation, media devices, and more)
Event APIs: addEventListener, removeEventListener, Event, CustomEvent

## Key Points:
Web APIs are often globally available because they are properties of the global object (window in browsers).
You can access them directly or via window (e.g., localStorage is the same as window.localStorage).
This global accessibility makes it easy to use these APIs across different parts of your JavaScript code.

## In summary, Web APIs are indeed global objects or accessible through the global window object in browsers.




## The fetch API is a modern, built-in JavaScript function for making network requests, typically to retrieve data from servers. It provides a cleaner and more flexible way to make asynchronous HTTP requests, replacing older methods like XMLHttpRequest.

#  Features:
Promise-based: fetch returns a Promise, which resolves once the response is received. This allows for easier chaining and error handling with .then() and .catch().
Simple syntax: It uses a simple, readable API for making network requests.
Support for JSON: Fetch supports easy handling of JSON data, which is common in modern web APIs.

# Basic Syntax:

fetch(url, options)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle any errors
  });

url: The URL you are requesting.
options (optional): An object to configure the request (e.g., method, headers, body).

# Example of Fetching Data:
Here's how you can use fetch to get data from a URL (e.g., a JSON placeholder API):

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())  // Parse the JSON from the response
  .then(data => console.log(data))    // Handle the parsed data
  .catch(error => console.error('Error:', error)); 




## In JavaScript, the microtask queue is part of the event loop and is used to handle tasks that should be executed after the currently executing script and before any other tasks in the macrotask queue (or task queue).

Microtasks are typically smaller, immediate tasks like promise callbacks (.then(), .catch(), .finally()), and mutation observers.

How the Microtask Queue Works
# When does a microtask execute?

After the call stack is empty but before the next macrotask (e.g., setTimeout, or I/O events) is run, the JavaScript engine checks the microtask queue.
If there are microtasks waiting, the engine processes all of them before moving to the next macrotask.

## Examples of Microtasks:

Promise resolution (e.g., .then(), .catch()).
Mutation observers.
queueMicrotask(): A method that explicitly adds a task to the microtask queue.

## MicroTask queue has high priority than callstack Queue