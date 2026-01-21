// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let guessField = document.querySelector("#guessField");
// let guesses = document.querySelector(".guesses");
// let lastResult = document.querySelector(".lastResult");
// let lowOrHi = document.querySelector(".lowOrHi");
// let guessSubmit = document.querySelector(".guessSubmit");

// let guessCount = 1;
// let resetBtn;

// function checkGuess() {
//   const userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = "Previous guesses:";
//   }
//   guesses.textContent = `${guesses.textContent} ${userGuess}`;

//   if (userGuess === randomNumber) {
//     lastResult.textContent = `Congratulations! You got it right in ${guessCount} attempts!`;
//     lastResult.style.backgroundColor = "green";
//     lowOrHi.textContent = "";
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = "Game Over!";
//     lowOrHi.textContent = "";
//     setGameOver();
//   } else if (isNaN(guessField.value) || guessField.value === "") {
//     lastResult.textContent = "Please enter a valid number";
//     lowOrHi.textContent = "";
//   } else {
//     lastResult.textContent = "Wrong!";
//     lastResult.style.backgroundColor = "red";
//     if (userGuess < randomNumber) {
//       lowOrHi.textContent = "Last guess was too low!";
//     } else if (userGuess > randomNumber) {
//       lowOrHi.textContent = "Last guess was too high!";
//     }
//   }
//   guessCount++;
//   guessField.value = "";
//   guessField.focus();
// }
// guessSubmit.addEventListener("click", checkGuess);

// function setGameOver() {
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetBtn = document.createElement("button");
//   resetBtn.textContent = "Start Game";
//   document.body.appendChild(resetBtn);
//   resetBtn.addEventListener("click", resetGame);
// }

// function resetGame() {
//   guessCount = 1;

//   const resetParas = document.querySelectorAll(".resultParas p");
//   for (const resetPara of resetParas) {
//     resetPara.textContent = "";
//   }

//   resetBtn.remove();

//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = "";
//   guessField.focus();
//   lastResult.style.backgroundColor = "white";
//   randomNumber = Math.floor(Math.random() * 100) + 1;
// }

// const list = document.querySelector(".output");
// list.textContent = "";
// const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

// for (const city in cities) {
//   const lower = city.toLowerCase();
//   const firstLetter = lower.slice(0, 1);
//   const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
//   const result = capitalized;
//   const listItem = document.createElement("li");
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }

// const cars = ["Volvo", "Benz", "Venza"];
// cars[0] = "Ferrari";
// const addedCars = cars.push("Range Rover", "Lambhorgini");
// console.log(cars);
// console.log(addedCars);

// const random = ["tree", 795, [0, 1, 2, "BrightTrump"]];
// console.log(
//   random[2][3] + " is the fourth item of the second array in the array"
// );

// const staffs = ["BrightTrump", "Jennifer", "Sharon", "Oke", "Edwin"];
// const removedStaffs = staffs.pop(indexOf(2));
// console.log(staffs);

// const students = [
//   "Moses",
//   "Alice",
//   "Bob",
//   "Sharon",
//   "Daniel",
//   "Charlie",
//   "Edwin",
// ];
// students.map(() => {
//   if (students.includes("Daniel")) {
//     console.log("Found");
//   } else {
//     console.log("Failed to find student");
//   }
// });

// const requiredApprentices = ["Moses", "Jennifer", "Daniel"]; // "Daniel" is missing
// const apprentices = [
//   "Moses",
//   "BrightTrump",
//   "Jennifer",
//   "Sharon",
//   "Oke",
//   "Edwin",
// ];

// requiredApprentices.forEach((apprentice) => {
//   if (!apprentices.includes(apprentice)) {
//     console.log(`${apprentice} is missing`);
//   }
// });

// const students = ["Moses", "BrightTrump", "Jennifer", "Sharon", "Oke", "Edwin"];

// students.map((student) => {
//   console.log(student); // Do something with each student
// });

// const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// const singleCity = cities.indexOf("Liverpool");

// if (singleCity === 1) {
//   cities.splice(singleCity, 2);
// }
// console.log(cities);

// Option One
// function double(number) {
//   return number * 100;
// }
// const numbers = [10, 4, 6, 9, 11];
// const doubled = numbers.map(double);
// console.log(doubled);
// //Option two(2)
// const multiplication = [10, 4, 6, 9, 11];
// const answer = multiplication.map((doubler) => doubler * 10);
// console.log(answer);

// function isLong(city) {
//   return city.length > 7;
// }
// const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
// const returnedCities = cities.filter((isLong) => isLong.length > 7);
// console.log(returnedCities);

// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(",");
// console.log(cities);
// console.log(cities[1]);
// console.log(cities[3]);
// console.log(cities[4]);
// console.log(cities.length - 1);

// const previousForm = cities.toString(); // Note: You can use toString() or join(",")
// console.log(previousForm);

// const products = [
//   "Underpants:6.99",
//   "Socks:5.99",
//   "T-shirt:14.99",
//   "Trousers:31.99",
//   "Shoes:23.99",
// ];
// let total = 0;

// for (const product of products) {
//   const splitted = product.split(":");
//   const name = splitted[0];
//   const price = Number(splitted[1]);
//   total++;

//   const itemText = `${name} ${price}`;
// }

const list = document.querySelector(".list-item");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#submit");

list.textContent = "";

const myHistory = [];
const maxHistory = 5;

searchBtn.onclick = () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
};

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed ${event.key}`;
// });
