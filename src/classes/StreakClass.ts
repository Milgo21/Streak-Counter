// import task from '../interfaces/interface.ts';

import Task from "../interfaces/interface";

export class StreakClass{
    
    // streakname:string;
    // taskimage:string;
    // date:string;
    // currElement: HTMLAllCollection;
    public tasks:Task [];
    constructor(){
        this.tasks = [];
    }

    // constructor(streakname:string, taskimage:string, date:string){
    //     this.streakname=streakname
    //     this.taskimage=taskimage
    //     this.date=date
    // }
    public openStreakModal(): void{

    }
    public closeStreakModal(): void{

    }
    public addTask(title: string, link: string, date: string): void{

        const form = document.querySelector('form') as HTMLFormElement;
        const bottomText = document.querySelector('.bottom-text') as HTMLParagraphElement;
        if(this.validateForm(title, link, date)){
            const newTask: Task = {id: Math.random(), name: title, taskimage: `<ion-icon name=${link}></ion-icon>`, date: date };
            this.tasks = [...this.tasks,newTask];
            // this.tasks.push(newTask);
            bottomText.innerText=`Activities`;
            this.displayTasks(newTask);
            // bottomIcon.innerHTML=`<ion-icon name="${link}"></ion-icon>`
            // bottomText.innerText=`Activities`;
            // bottomDate.innerHTML=`${date}`
            // bottomdesc.innerHTML = `${title}`
        }else{
            const p = document.createElement('p')
            p.textContent='Please fill in all Fields'
            p.style.color='red'
            p.id='error-message'
            form.insertAdjacentElement('afterbegin', p)
    
            setTimeout(()=>{
                p.style.display='none'
            },1000)
        };
    }
    private displayTasks(task: Task): void {
        const containerDiv = document.querySelector('.bottom-page2') as HTMLDivElement;
            const bottomIcon: HTMLDivElement = document.createElement("div");
            const list = bottomIcon.classList;
            list.add('activity-icon');
            bottomIcon.innerHTML=task.taskimage;

            const bottomDate: HTMLDivElement = document.createElement("div");
            const list2 = bottomDate.classList;
            list2.add('activity-date')
            bottomDate.innerHTML=task.date;

            const bottomdesc: HTMLDivElement = document.createElement("div");
            const list3 = bottomdesc.classList;
            list3.add('activity-title')
            bottomdesc.innerHTML = task.name;
            
            const popupdiv: HTMLDivElement = document.createElement("div");
            const list4 = popupdiv.classList;
            list4.add('activity-display');
            popupdiv.setAttribute('id', task.id.toString())


            popupdiv.appendChild(bottomIcon);
            popupdiv.appendChild(bottomDate);
            popupdiv.appendChild(bottomdesc);
            console.log(popupdiv);

            containerDiv.append(popupdiv);

            // const popupdivr = document.querySelector('.activity-display') as HTMLDivElement;
            // popupdiv.addEventListener('click', function() {
            //     const popUp = document.querySelector(".pop-up") as HTMLDivElement;
            //     this.openTask(popUp);
            // });
            

    }
    private validateForm(title: string, link: string, date: string): Boolean{
        if(title==`` || link == ``|| date==``){
            return false;
        }
        return true;
    }

    public deleteTask(id: string): void{

    }

    public openTask(popUp: any): void{
        const list = popUp.classList;
        list.add('pop-up-active');
    }
    
    public closeTask(popUp: HTMLDivElement): void{
        const list = popUp.classList;
        list.remove('pop-up-active')
    }
    public setEventListener(){
        this.tasks.forEach(task => {
            const card = document.getElementById(task.id.toString());
            card?.addEventListener('click', () => {
                const popUp = document.querySelector(".pop-up") as HTMLDivElement;
                // this.openTask(popUp);
                const list = popUp.classList;
                list.add('pop-up-active');
            })
             // const popupdivr = document.querySelector('.activity-display') as HTMLDivElement;
            //  popupdiv.addEventListener('click', function() {
            //     this.openTask(popUp);
            // });
        })
    }

}
// export default StreakClass;