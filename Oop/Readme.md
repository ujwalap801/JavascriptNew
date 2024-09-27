Filter method is only used for selection, modifications ad updation can't be done such as (-,+)

Map method is used for modification

-for of loop is not used for indexed based operations, directly we use the elements 
-for basic loop operation we use for element and also indexed based operations but its old, and spellings should be used correctly


-foreach loop used for both element and indexed based operatiosns and it returns nothing


reduce(reduce array to a single value)


1. Object Literals (Objects with different types)
This is the simplest and most straightforward way to create an object. You directly define the object using curly braces ({}), and inside the object, you define properties and methods.

// Object Literal
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  start: function() {
    console.log('Car started');
  }
};

console.log(car.brand); // Output: Toyota
car.start(); // Output: Car started



In JavaScript, you can create objects using two common methods: Object Literals and Constructors.

1. Object Literals
This is the simplest and most straightforward way to create an object. You directly define the object using curly braces ({}), and inside the object, you define properties and methods.

Example:
javascript
Copy code
// Object Literal
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  start: function() {
    console.log('Car started');
  }
};

console.log(car.brand); // Output: Toyota
car.start(); // Output: Car started

2. Constructors
A constructor function allows you to create multiple instances of an object, each with its own set of properties. Constructors act like templates (or classes in other languages). You use the new keyword to create an object based on the constructor function.


// Constructor Function
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.start = function() {
    console.log(this.brand + ' started');
  };
}

// Creating objects using the constructor
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2019);

console.log(car1.brand); // Output: Toyota
car1.start(); // Output: Toyota started

console.log(car2.model); // Output: Civic
car2.start(); // Output: Honda started


Every Object contains a special property called as prototype
In js, Inheritance is based on prototype


