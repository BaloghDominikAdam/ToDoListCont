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
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        div.classList.add("feladat");
        h3.textContent = task;
        todoList.appendChild(div);
        div.appendChild(h3);
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

    const nemkesz = document.getElementById("hozzaadas")

    const id = generateId();

    const ujfeladat = document.createElement("div")


    const ujfeladatleiras = document.createElement("h3")
    
    
    ujfeladatleiras.textContent = ertek;


    ujfeladat.classList.add("feladat")
    ujfeladat.setAttribute("data-id", id);



    ujfeladat.appendChild(ujfeladatleiras)

    nemkesz.appendChild(ujfeladat)

    
    eloHivo.value = ""
    




}



function keszreTetel(){

}