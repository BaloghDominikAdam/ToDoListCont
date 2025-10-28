

const eloHivo = document.querySelector(".inputValue")
const hozzaAdGomb = document.querySelector(".hozzaAdGomb")
const iconka = document.querySelector(".iconka")
const plusgomb = document.querySelector(".Plus")
const minusgomb = document.querySelector(".Minus")



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

    const nemkesz = document.getElementById("faszomategyed")

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