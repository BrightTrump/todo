let tasks = [];
let items = document.querySelector("#list");
let errorMsg = document.querySelector(".error");

// Display tasks
function displayTasks() {
  items.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    items.innerHTML += `
      <li class="flex justify-between items-center mb-2">
        <span class="mr-2 font-bold">${i + 1}.</span>
        <span class="flex-1">${tasks[i]}</span>
        <button
          onclick="removeTask(${i})"
          class="bg-red-500 text-white px-2 rounded"
        >
          x
        </button>
      </li>
    `;
  }
}

// Add task
function addTask() {
  let taskInput = document.querySelector("#input-value");
  let text = taskInput.value.trim();

  if (text === "") {
    // alert("Input can't be empty");
    errorMsg.classList.remove("hidden");
    return;
  }

  tasks.push(text);
  taskInput.value = "";
  errorMsg.classList.add("hidden");
  saveTasks();
  displayTasks();
}

// Remove task
function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

// Clear all tasks
function clearAllTask() {
  tasks = [];
  errorMsg.classList.add("hidden");
  saveTasks();
  displayTasks();
}

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// Load tasks
function loadTasks() {
  let savedItem = localStorage.getItem("tasks");
  if (savedItem !== null) {
    tasks = JSON.parse(savedItem);
  }
  displayTasks();
}

// Load and display tasks when page loads
loadTasks();
