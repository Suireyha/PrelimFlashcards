let textbox = document.querySelector(".textbox");
let confirm = document.querySelector("#confirm");
let image = document.getElementById("card");
let header = document.querySelector(".label");

var previous;
var answer;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkAnswer(){

    if (textbox.value == answer){
        textbox.setAttribute('style', 'border-color: lime; box-shadow: 0 0 10px lime; border: solid 4px lime; color: white;');
        await sleep(500);
        textbox.setAttribute('style', 'border-color: lime; box-shadow: 0 0 10px lime; border: solid 3px lime; color: white;');
        await sleep(500);
        textbox.setAttribute('style', 'border-color: gray; box-shadow: none; color: gray;');
    }   
    else{
        header.textContent = "Correct answer:   " + answer;
        textbox.setAttribute('style', 'border-color: red; box-shadow: 0 0 10px red; border: solid 4px red; color: white;');
        await sleep(500);
        textbox.setAttribute('style', 'border-color: red; box-shadow: 0 0 10px red; border: solid 3px red; color: white;');
        await sleep(500);
        textbox.setAttribute('style', 'border-color: gray; box-shadow: none; color: gray;');
        await sleep(500);
        header.textContent = "Which system flow symbol is this?";

    }

    randomImage();
    textbox.value = "";
}

function isEnter(keydown){

    textbox.setAttribute('style', "border-color: #239fd8; box-shadow: 0 0 5px #239fd8; color: white;");

    if (keydown.key == 'Enter'){
        checkAnswer();
    }
}

function randomImage(){
    //random number between 0 and 25
    var random = Math.floor(Math.random() * (25 - 0) + 0);  

    if(random == previous){
        if (random == 25){
            random--;
        }
        else{
            random++;
        }
    }

    console.log(random);

    switch(random){
        case 0:
            image.src="./Assets/collate.png";
            answer = "Collate"
            break;
        case 1:
            image.src="./Assets/connector.png";
            answer = "Connector"
            break;
        case 2:
            image.src="./Assets/data.png";
            answer = "Data"
            break;
        case 3:
            image.src="./Assets/database.png";
            answer = "Database"
            break;
        case 4:
            image.src="./Assets/decision.png";
            answer = "Decision"
            break;
        case 5:
            image.src="./Assets/delay.png";
            answer = "Delay"
            break;
        case 6:
            image.src="./Assets/display.png";
            answer = "Display"
            break;
        case 7:
            image.src="./Assets/document.png";
            answer = "Document"
            break;
        case 8:
            image.src="./Assets/internalstorage.png";
            answer = "Internal storage";
            break;
        case 9:
            image.src="./Assets/logicalor.png";
            answer = "Or";
            break;
        case 10:
            image.src="./Assets/looplimit.png";
            answer = "Loop limit";
            break;
        case 11:
            image.src="./Assets/manualinput.png";
            answer = "Manual input";
            break;
        case 12:
            image.src="./Assets/manualloop.png";
            answer = "Manual loop";
            break;
        case 13:
            image.src="./Assets/merge.png";
            answer = "Merge";
            break;
        case 14:
            image.src="./Assets/multipledocuments.png";
            answer = "Multiple documents";
            break;
        case 15:
            image.src="./Assets/offpage down.png";
            answer = "Off page connector";
            break;
        case 16:
            image.src="./Assets/offpage left.png";
            answer = "Off page connector";
            break;
        case 17:
            image.src="./Assets/offpage right.png";
            answer = "Off page connector";
            break;
        case 18:
            image.src="./Assets/offpage up.png";
            answer = "Off page connector";
            break;
        case 19:
            image.src="./Assets/preperation.png";
            answer = "Preperation";
            break;
        case 20:
            image.src="./Assets/process.png";
            answer = "Process";
            break;
        case 21:
            image.src="./Assets/sort.png";
            answer = "Sort";
            break;
        case 22:
            image.src="./Assets/storeddata.png";
            answer = "Stored data";
            break;
        case 23:
            image.src="./Assets/subroutine.png";
            answer = "Subroutine";
            break;
        case 24:
            image.src="./Assets/sumjunction.png";
            answer = "Summing junction";
            break;
        case 25:
            image.src="./Assets/terminator.png";
            answer = "Terminator";
            break;

    }

    previous = random;

}

randomImage();

confirm.addEventListener('click', ()=>{checkAnswer()});
textbox.addEventListener('mouseover', ()=>{textbox.setAttribute('style', "border-color: #58a0c2; box-shadow: 0 0 3px #58a0c2; color: #b6b6b6;")})
textbox.addEventListener('focus', ()=>{textbox.setAttribute('style', "border-color: #239fd8; box-shadow: 0 0 5px #239fd8; color: white;")});