/*
  In a classical based language Constructors are functions
  that create objects based on the class.
  In javascript it is an option for creating objects
  It can be thought of as a way for an object to be
  created and initialized with values.
*/
//-------OBJECT CREATION AND MANIPULATION----------
// Here are ways to create objects in JS
var newObject = {};
var newObject = Object.create(Object.prototype);
var newObject = new Object();
// different ways of adding props to objects

// 1. Dot syntax
// setting
newObject.someKey = "Hello World!";
// getting
var value = newObject.someKey;

// 2. Square bracket syntax
// setting
newObject["bracketKey"] = "Hello World!";
// getting
var bracketVal = newObject["bracketKey"];

// ES5 options only
// 3. Object.defineProperty
// setting properties
Object.defineProperty(newObject, "defineKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
});
// There is a shorthand for the above method
var defineProp = function(obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
};
// to use, we then create a new empty "person" Object
var person = Object.create(Object.prototype);
// Then give it properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1988");
defineProp(person, "hasBeard", false);

console.log(person);

// 4. Object.defineProperties
// setting
Object.defineProperties(newObject, {
  "aKey": {
    value: "Hello World",
    writable: true
  },
  "anotherKey": {
    value: "Foo Bar",
    writable: false
  }
});
// INHERITANCE - Not a good way to describe JS
//
// Usage:
// create a race car driver that inherits from person
var driver = Object.create(person);
// set some new props
defineProp(driver, "topSpeed", "100mph");
// Get an inherited property 1988
console.log(driver.dateOfBirth);
// Get the prop we just set
console.log(driver.topSpeed);
//----------------CONSTRUCTORS--------------------
/*
  When using a constructor function we must call it with the new keyword, this will make a brand new object, assign this to it, make its prototype the constructor function and then return that object
*/
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  // Shadowing technique
  this.toString = function() {
    return this.model + " has done " + this.miles + " miles";
  };
}
// Usage:
// We can create a new instance of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 50000);
// and then we can call the toString method
console.log(civic.toString());
console.log(mondeo.toString());

// To stop there from being so many instances
// of the toString method (every car would have one)
// we can attach things to the prototype.
Car.prototype.toString = function() {
  return this.model + " has done " + this.miles + " miles";
}
