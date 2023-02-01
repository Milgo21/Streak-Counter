


// div elements
const welcomePage = document.querySelector(".welcome-page") as HTMLDivElement;
const addTask = document.querySelector(".add-task") as HTMLDivElement;
// Button Elements
const addButton =  document.getElementById("add-streak") as HTMLButtonElement;
const closeButton = document.querySelector(".close-button") as HTMLButtonElement;
// Pop up
const popUp = document.querySelector(".pop-up") as HTMLDivElement;
// Pop up buttons
const popUpClose = document.querySelector(".close-btn") as HTMLButtonElement;
const popUpDelete = document.querySelector(".delete-btn") as HTMLButtonElement;
// Form button
const formButton = document.getElementById("add-btn") as HTMLButtonElement;

// Form Input
const taskName = document.getElementById("name") as HTMLInputElement;
const url = document.getElementById("image") as HTMLInputElement;
const streakDate = document.getElementById("date") as HTMLInputElement;


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


// Remove pop-up
popUpClose.addEventListener('click',()=>{
    const list = popUp.classList;
    list.remove('pop-up-active')
});
popUpDelete.addEventListener('click',()=>{
    const list = popUp.classList;
    list.remove('pop-up-active')
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



