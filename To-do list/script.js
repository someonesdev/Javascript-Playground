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
    let newTask = taskList.querySelector(".list-item:first-child");

    newTask.addEventListener("click", function () {
      this.classList.add("completed");
      this.addEventListener("transitionend", function () {
        this.remove();
      });
    });
  }
  taskInput.value = "";
}

allItems.forEach(function (listItem) {
  listItem.addEventListener("click", function () {
    this.classList.add("completed");
    this.addEventListener("transitionend", function () {
      this.remove();
    });
  });
});

function completeAll() {
  allItems = document.querySelectorAll("li");
  for (var i = 0; i < allItems.length; i++) {
    allItems[i].classList.add("completed");
    allItems[i].addEventListener("transitionend", function () {
      this.remove();
    });
  }
}
deleteAll.addEventListener("click", completeAll);
