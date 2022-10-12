const container = document.querySelector("#container");
const btnContainer = document.querySelector(".for-btn");
let divs = [];
let size = 256;
let col;

let btn = document.createElement("button");
btn.innerText = "Grid Size";
btn.classList.add("grid-size-btn");
btnContainer.appendChild(btn);

btn.addEventListener("click", gridSize);

createGrid(size);

function createGrid(length){
    col = Math.sqrt(length);
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;

    for (let i = 0; i < length; i++) {
        divs.push(document.createElement("div"));
    }
    
    for (let i = 0; i < length; i++) {
        divs[i].classList.add("boxes");
        divs[i].addEventListener("mouseover", changeColour);
        container.appendChild(divs[i]);
    }
}

function changeColour(e) {
    e.target.classList.add("hover");
    console.log(e.target);
}

function gridSize(e) {
    console.log(e.target);
    size = prompt("What size would you like your grid to be?", 16);
    size = parseInt(size);

    if (size > 100) {
        size = 100;
    }
    size *= size

    container.textContent = "";
    createGrid(size);
}