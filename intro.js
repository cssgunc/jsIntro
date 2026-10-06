// this is the scripted link the intro.html files points to
// so think of all this as a big script page lol

// sticking to the body analogy
// if the html is like our virtual bones
// then js is like the muscles which can allow our virtual bones to move

// in html we had a line like
// <button id="testButton"></button>

// first we need to get the "essence" of that button
// by that i just mean the element needs to be here

const myButton = document.getElementById("testButton");
myButton.innerHTML = "hdfsafsafsafar"
// lets dive into the SYNTAX ( rules of how to "maneuver" in a language )

// const - this is a declaration key word NOT a TYPE

const x = 5;

// the most common declaration key word will be const
// and it means constant, so you can never change x after initializing it
// remember, first you declare then you initialize ( the equals part )

let y;
y = 5;
y = 3;

const z = y;
y = 4;

// let is the other declaration key word
// and it allows for its variable to be changed later
// unlike const it CAN be initialized in different line

const mySameButton = document.getElementById("testButton");

// mySameButton is just the name of the variable I chose to 
// represent the DOM element
// DOM - document object model

document.getElementById("testButton");

// document is basically the entire web environment
// i.e. every time you click a web screen your interacting with the document
// were calling a function of the document which gets us that DOM element

console.log(mySameButton);

// this will print what mySameButton looks like in the console
// also you dont need to end all your lines with a semicolon (;) in js
// unlike languages like C, it doesnt really matter, but its good

console.dir(mySameButton);

y = "cool";
console.dir(y);
console.log(y);

// this does the same thing as log, but makes sure to show the object properties,
// instead of the "pretty" DOM element 

// alot of debugging is done by console logging or dirring stuff

const myDumbButton = mySameButton;

// this still goes to the same thing since its an object

// OBJECT REVIEW
// OBJECT REVIEW
// OBJECT REVIEW
// OBJECT REVIEW
// OBJECT REVIEW

