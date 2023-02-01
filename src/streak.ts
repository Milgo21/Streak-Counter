// div elements
const welcomePage = document.querySelector(".welcome-page") as HTMLDivElement;
const addTask = document.querySelector(".add-task") as HTMLDivElement;
// Button Elements
const addButton =  document.getElementById("add-streak") as HTMLButtonElement;
const closeButton = document.querySelector(".close-button") as HTMLButtonElement;
// Pop up buttons
const popUpClose = document.querySelector(".close-btn") as HTMLButtonElement;
const popUpDelete = document.querySelector(".delete-btn") as HTMLButtonElement;
// Form button
const formButton = document.getElementById("add-btn") as HTMLButtonElement;
console.log(popUpClose);


addButton.addEventListener('click',()=>{
    const list = welcomePage.classList
    list.add('not-active');
    const addTaskList = addTask.classList;
    addTaskList.remove('not-active');
    
});
closeButton.addEventListener('click',()=>{
    const list = welcomePage.classList
    list.remove('not-active');
    const addTaskList = addTask.classList;
    addTaskList.add('not-active');  
});



