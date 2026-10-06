// before we dive into the code below

console.log(x);

// the code above works since <script></script> will just unpack all the scripts into one
// so you should use unique, use common sense (be specific), variable names

// before we dive more into js
// we should all have an idea of what object is

const myObject = {
  name: "gabriel", // uses colon between field and value for (field : value)
  age: 19 // comma seperated entries, no commas and multiple fields = SYNTAX ERROROROROROR
}

// although humans aren't objects, in code most complex things are
// in our object above we have two main things going on

// myObject is that name of the object that has fields (name and age)
// it allows us to use these fields for later use

console.log(myObject);
console.dir(myObject);
console.log(myObject.name);
console.log(myObject.age);

// see console :)

console.log(myObject.cool);

// refer to console

const myNewObject = myObject;

// this will come back later *-*

myObject.name = "";
myObject.age = 0;

console.log(myObject.age)

// "WAIT!" you all say in unison, "How have you just changed a const?"
// if you dont know the answer its below  (.)(.) - [ these are eyes ]

// hidden answer
// hidden answer
// hidden answer
// hidden answer
// hidden answer

// you can almost taste it


// jk

console.log(myObject);
console.log(myNewObject);

// these two things console log the same thing!

let g = "cool";
const f = g;

g = "uncool";

console.log(f);
console.log(g);

// and these two print different things!

// hidden answer
// hidden answer
// hidden answer
// hidden answer
// hidden answer

// you can almost taste it

// the difference is that IN js only objects are reference types 
// everything else is considered a primitive type 

// reference passes the reference
// primitives pass the value

const myNewerObject = myNewObject;

// so the line above passes what its refering to that
// i.e. the cool space below
// so any new variable referring to it can act like a TV remote and change it

/*
  {
    name: 
    age: 19
  }
*/

// while g = 5; only passes the value of 5 and doesn't make g the godfather of all 5's
// i.e. g = 7; won't make all 5's now equal to 7.


// in js we (I) typically use objects to avoid
let personName = "gabriel";
let personAge = 19;
// ... then you can easily pass these objects 

// but if we make objects because were too lazy to make a bunch of variables
// what do if we're to lazy to make a bunch of objects?

// thats where we can make models!
// the class keyword is used behind models which are basically blueprints for objects 
class PersonModel {
  // this allows an object to be constructed super easy
  // can also imagine this as a little factory that waiting on ingredients
  constructor(name, age) {
    // dont use comma seperated values
    this.name = name;
    this.age = age; 
  }

  // this is a method within the model
  // i.e. its a function inside the object
  // i.e. all methods are functions, but not all functions are methods
  sayHello() {
    console.log("hello, im " + this.name + "!" );
    // best to use the "this" keyword so it knows youre referring to the one in the model
  }
}

// the new keyword is just telling our "factory" to spew out a new object
const person =  new PersonModel("gabriel", 19);
const differentPerson =  new PersonModel("not gabriel", 67);
const differentPerson2 =  new PersonModel("not gabriel", 67);
const differentPerson3 =  new PersonModel("not gabriel", 67);

console.log(person.name);
console.log(differentPerson.name);

// we can also use that method we added to the object
person.sayHello();

// well its no fair if we can only make functions in models
// so its good that we can also make then in objects!
// its also pretty much the same to implement
const myOtherObject = {
  name: "gabriel",
  sayHello(){
    console.log(this.name)
  }
}

// now that we know all this cool info about objects holding fields, values, and methods
// we can go back to busines :)

