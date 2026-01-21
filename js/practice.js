// const greet = (name = "BrightTrump", age = 30) =>
//   `Hello ${name}! You are ${age} years old.`;

// alert(greet());

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// let numb = fruits.get("bananas");

// alert(`The total number of Bananas is ${numb} `);

//Tracking Visitors Visits
let text;
const visitsCount = new WeakMap();

const visitorsDetails = [
  { name: "John", age: 40 },
  { name: "Joshua", age: 23 },
  { name: "Johnny", age: 44 },
  { name: "Josiah", age: 32 },
];

function track(visitor) {
  let count = visitsCount.get(visitor) || 0;
  count++;

  visitsCount.set(visitor, count);

  text = `${visitor.name} (Age ${visitor.age}) has visited ${count} time(s)`;
  return text;
}
// Track visits
console.log(track(visitorsDetails[0]));
console.log(track(visitorsDetails[1]));
console.log(track(visitorsDetails[2]));
