import { szamokgomb } from "./szamok.js";

const szamGombokELEM = document.getElementsByClassName("szamok")[0];
szamGombokELEM.innerHTML += szamokgomb();
const gombELEMEK = document.querySelectorAll(".szamokgomb");

for (let index = 0; index < gombELEMEK.length; index++) {
    gombELEMEK[index].addEventListener("click", kattintas);
}

const kijelzoELEM = document.getElementsByClassName("kifejezes")[0];

function kattintas(event){
   kijelzoELEM.innerHTML += event.target.innerHTML
}