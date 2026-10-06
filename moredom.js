

// getting buttons by id, className, and query selector
document.getElementById("")
document.getElementsByClassName("")
const buttons = document.querySelectorAll(".testClass");

// further using query selector for more stuff

buttons.forEach((btn, i) => {
  btn.textContent = `Button ${i+1}`;
  btn.addEventListener("click", () => {
    
    alert(`You clicked button ${i+1}!`);

    btn.style.backgroundColor = "lightblue";
  });
});

// more dom interaction

const people = [
  { name: "Gabriel", age: 19 },
  { name: "cool guy", age: 23 },
  { name: "ANAKIN", age: 30 }
];

const listDiv = document.createElement("div");
document.body.appendChild(listDiv);

people.forEach(person => {
  const p = document.createElement("p");
  p.textContent = `${person.name} is ${person.age} years old.`;
  listDiv.appendChild(p);
});

function greet(person) {
  return `Hello ${person.name}, age ${person.age}`;
}

people.forEach(person => console.log(greet(person)));