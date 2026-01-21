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
    
}
