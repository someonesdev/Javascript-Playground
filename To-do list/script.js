
"use strict";

let taskList = document.querySelector("#task-list");

let newTaskBtn = document.querySelector(".new-task");
newTaskBtn.addEventListener("click", function () {
    let task = String(document.querySelector("#task-input").value);
    let newListItem = document.createElement("li");
    let newSpan = document.createElement("span");
    newSpan.textContent = task;
    newListItem.appendChild(newSpan);
    taskList.appendChild(newListItem);
});