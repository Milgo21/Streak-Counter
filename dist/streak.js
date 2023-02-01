"use strict";
// div elements
const welcomePage = document.querySelector(".welcome-page");
const addTask = document.querySelector(".add-task");
// Button Elements
const addButton = document.getElementById("add-streak");
const closeButton = document.querySelector(".close-button");
// Pop up buttons
const popUpClose = document.querySelector(".close-btn");
const popUpDelete = document.querySelector(".delete-btn");
// Form button
const formButton = document.getElementById("add-btn");
console.log(popUpClose);
addButton.addEventListener('click', () => {
    const list = welcomePage.classList;
    list.add('not-active');
    const addTaskList = addTask.classList;
    addTaskList.remove('not-active');
});
closeButton.addEventListener('click', () => {
    const list = welcomePage.classList;
    list.remove('not-active');
    const addTaskList = addTask.classList;
    addTaskList.add('not-active');
});
