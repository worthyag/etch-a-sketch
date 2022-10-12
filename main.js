const container = document.querySelector("#container");
let divs = [];

for (let i = 0; i < 256; i++) {
    divs.push(document.createElement("div"));
}

for (let i = 0; i < divs.length; i++) {
    // divs[i].innerText = i+1;
    divs[i].classList.add("boxes");
    container.appendChild(divs[i]);
}



console.log(divs);