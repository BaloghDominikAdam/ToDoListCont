let darkmode = localStorage.getItem('darkmode')
const darkmodeBtn = document.getElementById('darkmodeBtn')

function enableDarkmode(){
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

function disableDarkmode(){
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

darkmodeBtn.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

//-----------------------------------------------------------
const eloHivo = document.querySelector(".inputValue");
const hozzaAdGomb = document.querySelector(".hozzaAdGomb");
const plusgomb = document.querySelector(".Plus");
const minusgomb = document.querySelector(".Minus");
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTextButton");
const todoList = document.querySelector(".nemKesz");
const successList = document.querySelector(".kesz");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

// ------------------------------
// RENDERELÉS
// ------------------------------
function renderTasks() {
    todoList.innerHTML = "";
    successList.innerHTML = "";

    // ---- NEM KÉSZ FELADATOK ----
    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.classList.add("feladat");

        const h3 = document.createElement("h3");
        h3.textContent = task;

        // ✅ GOMB
        const successBtn = document.createElement("button");
        successBtn.textContent = "✅";
        successBtn.style.marginRight = "15px";
        successBtn.style.background = "transparent";
        successBtn.style.border = "none";
        successBtn.style.cursor = "pointer";
        successBtn.style.fontSize = "20px";

        successBtn.addEventListener("click", () => {
            completedTasks.push(task);
            tasks.splice(index, 1);
            updateStorage();
            renderTasks();
        });

        // ❌ GOMB
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "15px";
        deleteBtn.style.background = "transparent";
        deleteBtn.style.border = "none";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.fontSize = "20px";

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            updateStorage();
            renderTasks();
        });

        todoList.appendChild(div);
        div.appendChild(h3);
        h3.appendChild(deleteBtn);
        h3.appendChild(successBtn);
    });

    // ---- KÉSZ FELADATOK ----
    completedTasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.classList.add("feladat");

        const h3 = document.createElement("h3");
        h3.textContent = task;

        // ↩️ VISSZAVONÁS GOMB
        const undoBtn = document.createElement("button");
        undoBtn.textContent = "↩️";
        undoBtn.style.marginLeft = "15px";
        undoBtn.style.background = "transparent";
        undoBtn.style.border = "none";
        undoBtn.style.cursor = "pointer";
        undoBtn.style.fontSize = "20px";
        undoBtn.addEventListener("click", () => {
            tasks.push(task);
            completedTasks.splice(index, 1);
            updateStorage();
            renderTasks();
        });

        // 🗑️ TÖRLÉS GOMB
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.style.marginLeft = "15px";
        deleteBtn.style.background = "transparent";
        deleteBtn.style.border = "none";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.fontSize = "20px";
        deleteBtn.addEventListener("click", () => {
            completedTasks.splice(index, 1);
            updateStorage();
            renderTasks();
        });

        successList.appendChild(div);
        div.appendChild(h3);
        h3.appendChild(deleteBtn);
        h3.appendChild(undoBtn);
    });
}

// ------------------------------
// STORAGE FRISSÍTÉS
// ------------------------------
function updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

// ------------------------------
// ÚJ FELADAT HOZZÁADÁSA
// ------------------------------
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = input.value.trim();

    if (newTask) {
        tasks.push(newTask);
        updateStorage();
        input.value = "";
        renderTasks();
    }
});

// ------------------------------
// BE/KI KAPCSOLÁS GOMBOK
// ------------------------------
function showInput(event) {
    event.preventDefault();
    eloHivo.style.display = "inline-block";
    hozzaAdGomb.style.display = "inline-block";
    plusgomb.style.display = "none";
    minusgomb.style.display = "inline-block";
}

function hideInput(event) {
    event.preventDefault();
    plusgomb.style.display = "inline-block";
    minusgomb.style.display = "none";
    eloHivo.style.display = "none";
    hozzaAdGomb.style.display = "none";
}



function hozzaAdas(event) {
    event.preventDefault();
    const ertek = eloHivo.value.trim();
    if (ertek === "") return;
    tasks.push(ertek);
    updateStorage();
    eloHivo.value = "";
    renderTasks();
}

// ------------------------------
renderTasks();


plusgomb.addEventListener("click", showInput);
minusgomb.addEventListener("click", hideInput);
hozzaAdGomb.addEventListener("click", hozzaAdas);