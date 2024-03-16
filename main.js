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

const plusz = document.querySelector("#osszeadas");
plusz.addEventListener("click", kattintas);

const minusz = document.querySelector("#kivonas");
minusz.addEventListener("click", kattintas);

const oszt = document.querySelector("#osztas");
oszt.addEventListener("click", kattintas);

const szor = document.querySelector("#szorzas");
szor.addEventListener("click", kattintas);

const pont = document.querySelector("#pont");
pont.addEventListener("click", kattintas);