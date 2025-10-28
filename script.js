const eloHivo = document.querySelector(".inputValue");
const hozzaAdGomb = document.querySelector(".hozzaAdGomb");
const iconka = document.querySelector(".iconka");
const plusgomb = document.querySelector(".Plus");
const minusgomb = document.querySelector(".Minus");
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTextButton");
const todoList = document.querySelector(".nemKesz");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks(){
    todoList.innerHTML = "";
    tasks.forEach((task, index) => {

       
 const successBtn = document.createElement("button")
        successBtn.textContent = "✅"
        successBtn.style.marginRight = "15px";
        successBtn.style.background = "transparent";
        successBtn.style.border = "none";
        successBtn.style.cursor = "pointer";
        successBtn.style.fontSize = "20px";

        successBtn.addEventListener("click", () => {
            tasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        } )
        
        const div = document.createElement("div");

       


        const h3 = document.createElement("h3");

        div.classList.add("feladat");

        h3.textContent = task;


        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "15px";
        deleteBtn.style.background = "transparent";
        deleteBtn.style.border = "none";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.fontSize = "20px";


        


        deleteBtn.addEventListener("click", () => {
            tasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            
            renderTasks();
        })


        
        todoList.appendChild(div);
        div.appendChild(h3);
        h3.appendChild(deleteBtn); 
        h3.appendChild(successBtn)
        
        
        
        
    });

}

addButton.addEventListener("click", () => {
    const newTask = input.value.trim();

    if(newTask){
        tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            input.value = "";
            renderTasks();
    }
});

renderTasks();

function generateId() {
  return "task-" + Date.now();
}

function showInput(){

    event.preventDefault();

    eloHivo.style.display = "inline-block"
    hozzaAdGomb.style.display = "inline-block"
    plusgomb.style.display = "none"
    minusgomb.style.display = "inline-block"

}

function hideInput(){
    event.preventDefault();


    plusgomb.style.display = "inline-block"
    minusgomb.style.display = "none"
    eloHivo.style.display = "none"
    hozzaAdGomb.style.display = "none"
}


function hozzaAdas(){


    
    event.preventDefault();


    const ertek = eloHivo.value.trim();
    if (ertek === "") return;

    tasks.push(ertek);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            input.value = "";
            renderTasks();
    




}



function keszreTetel(){

}