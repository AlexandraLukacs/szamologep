export function szamokgomb(){
    let txt = " ";
    for (let i = 0; i < 10; i++) {
        txt +=  `<button class="szamokgomb">${i}</button>`;
    }
    txt += " ";
    return txt;
}

