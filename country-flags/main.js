import {paises} from "./countries.js"


const grid = document.getElementById("grid")

const paisesKey= Object.keys(paises)

paisesKey.forEach((key) => {
    
    
    const div = document.createElement("div");
    div.classList.add("flex", "flex-col", "items-center");


    const img = document.createElement("img");
    img.src = `png100px/${key.toLowerCase()}.png`;
    img.alt = `Bandeira de ${paises[key]}`;


    const p = document.createElement("p");
    p.textContent = paises[key];


    div.appendChild(img);
    div.appendChild(p);

    grid.appendChild(div);

    //grid.innerHTML += `<div><img src="png100px/${key.toLowerCase()}.png"></img> <p>${paises[key]}</p> </div>`
})