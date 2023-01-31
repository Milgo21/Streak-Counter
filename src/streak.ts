const addIcon = document.getElementById('add-icon') as HTMLButtonElement;
const welcomePage = document.querySelector(".welcome-page") as HTMLDivElement;
const addPage = document.querySelector(".add-task") as HTMLDivElement;
const bottomPage = document.querySelector(".delete-btn") as HTMLButtonElement;
const closePopUp =  document.querySelector(".close-btn") as HTMLButtonElement;

addIcon.addEventListener('Click',()=>{
    welcomePage.style.display = 'none';
    addPage.style.display = 'block';
})
