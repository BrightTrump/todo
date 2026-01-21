let tasks = [];
let items = document.querySelector("#list");

// Display tasks
function displayTasks() {
  for (let i = 0; i < tasks.length; i++) {
    items +=
      "<li>" +
      tasks[i] +
      " <button onclick='removeTask(" +
      i +
      ")';> x</button></li>";
  }
}

//Add task
function addTask() {
  let taskInput = document.querySelector("#input-value");
  let text = taskInput.value;
  if (text === "") {
    alert("Input cannot be empty");
    return;
  }
  tasks.push(test);
  taskInput.value = "";
  saveTask();
  displayTasks();
}

// Remove task
function removeTask(i) {
  tasks.splice(i, 1);
  saveTask();
  displayTasks();
}

// Clear all task
function clearAllTask(i) {
  tasks = [];
  saveTask();
  displayTasks();
}
