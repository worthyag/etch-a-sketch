const container = document.querySelector("#container");
let divs = [];

for (let i = 0; i < 256; i++) {
    divs.push(document.createElement("div"));
}

for (let i = 0; i < divs.length; i++) {
    // divs[i].innerText = i+1;
    divs[i].classList.add("boxes");
    divs[i].addEventListener("mouseover", changeColour);
    container.appendChild(divs[i]);
}

function changeColour(e) {
    e.target.classList.add("hover");
    console.log(e.target);
}