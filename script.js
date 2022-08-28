let textbox = document.querySelector(".textbox");
let confirm = document.querySelector("#confirm");

function checkAnswer(){
    textbox.value = ""
}

confirm.addEventListener('click', ()=>{checkAnswer()});