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


## In summary, Web APIs are indeed global objects or accessible through the global window object in browsers.





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