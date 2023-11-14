const width = 56;
const height = 28;
const tablero = document.querySelector(".tablero");
const scoreDisplay = document.getElementById("score");
let score = 0;
const squares = [];

console.log("Hola1");
const dinoCurrentIndex = 28;

console.log("Hola");
squares[dinoCurrentIndex].classList.add("dino");
console.log(squares[dinoCurrentIndex].classList.add("dino"));

function control(e){
    squares[dinoCurrentIndex].classList.remove("dino");
    console.log("Hola2");
    console.log(e.keycode)
    switch (e.keycode) {
        case 87: //w
        if(dinoCurrentIndex - width >= 0 && !squares[dinoCurrentIndex - width].classList.containn("cactus"))
        console.log(e.keycode);
    }
}
function HandleKeyDown(ev){
    if(ev.keyCode == 32){
        Saltar();
    }
}

function Saltar(){
    if(!saltando){
        saltando = true;
        dino.classList.remove("dino-corriendo");
        audioSalto.currentTime = 0;
        audioSalto.play();
        if(dinoPosY > nivelDelMarCubriendo){
            velY = impulso;
        }else{
            velY = impulsoEnAgua;
        }
    }
}
