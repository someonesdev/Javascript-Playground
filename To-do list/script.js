"use strict";

let newTaskBtn = document.querySelector(".new-task");
let taskList = document.querySelector("#task-list");
let taskInput = document.querySelector("#task-input");
let allItems = document.querySelectorAll("li");
let deleteAll = document.querySelector(".deleteAll");

newTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let task = String(taskInput.value);
  if (task && task !== " ") {
    taskList.insertAdjacentHTML(
      "afterbegin",
      `<li class="list-item"><span>${task}</span></li>`
    );
    let newTask = taskList.querySelector("li:first-child");

    newTask.addEventListener("click", function () {
      this.remove();
    });
  }
  taskInput.value = "";
}

allItems.forEach(function (li) {
  li.addEventListener("click", function () {
    this.remove();
  });
});

function completeAll() {
  let allLi = document.querySelectorAll("li");
  allLi.forEach(function (li) {
    li.remove();
  });
}

deleteAll.addEventListener("click", completeAll);
