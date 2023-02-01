"use strict";
// div elements
const welcomePage = document.querySelector(".welcome-page");
const addTask = document.querySelector(".add-task");
// Button Elements
const addButton = document.getElementById("add-streak");
const closeButton = document.querySelector(".close-button");
// Pop up
const popUp = document.querySelector(".pop-up");
// Pop up buttons
const popUpClose = document.querySelector(".close-btn");
const popUpDelete = document.querySelector(".delete-btn");
// Form button
const formButton = document.getElementById("add-btn");
// Form Input
const taskName = document.getElementById("name");
const url = document.getElementById("image");
const streakDate = document.getElementById("date");
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
// Remove pop-up
popUpClose.addEventListener('click', () => {
    const list = popUp.classList;
    list.remove('pop-up-active');
});
popUpDelete.addEventListener('click', () => {
    const list = popUp.classList;
    list.remove('pop-up-active');
});
// formButton.addEventListener('click', addNewStreak)
// function addNewStreak(){
//     const title = taskName.value;
//     const url = url.value;
//     const date = streakDate.value;
//     if(title=`` || url = ``|| date ``){
//         const p = document.createElement('p')
//         p.textContent='Please fill in all Fields'
//         p.style.color='red'
//         p.id='error-message'
//         content.insertAdjacentElement('afterbegin', p)
//         setTimeout(()=>{
//             p.style.display='none'
//         },4000)
//     }else{
//         console.log(3);
//     }
// }
