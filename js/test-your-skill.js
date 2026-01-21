// const phones = ["Techno", "Infinix", "Gionee", "iphone"];
// alert(phones([0, "Tech"]));

// let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// let splitString = myString.split("+");

// alert(myString);

// // let newArray = splitString.map(function (item) {
// //   return item.charAt(0).toUpperCase() + item.slice(1);
// // });

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
let storyTest =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const inserty = ["the soup kitchen", "Disneyland", "the White House"];
const insertz = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);
function result() {
  const newStory = storyTest;
  const xItem = randomValueFromArray();
  const yItem = randomValueFromArray();
  const zItem = randomValueFromArray();

  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  story.textContent = "";
  story.style.visibility = "visible";
}

const user = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user);

console.log(jsonString); // '{"name":"Alice","age":25}'
