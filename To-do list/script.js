"use strict";

let newTaskBtn = document.querySelector(".new-task");
let taskList = document.querySelector("#task-list");
let taskInput = document.querySelector("#task-input");

newTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let task = String(document.querySelector("#task-input").value);
  if (task && task !== " ") {
    taskList.insertAdjacentHTML("afterbegin", `<li><span>${task}</span></li>`);
  }
}
