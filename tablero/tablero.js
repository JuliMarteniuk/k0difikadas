const dino = document.getElementByClass("dino");
const square = [];
let score = 0;

//Usa los switch de pacman para saltar

function salto(e){
    //getElementById(tablero); 
    if(dino.classList != "salto"){ //si no esta puesto el class salto entra
        dino.classList.add("salto"); //se le agrega el salto

        console.log(e.keycode);
        switch(e.keycode){
            case 32: 

        }

        setTimeout(function (){
             dino.classList.remove("salto") // Se le saca el class salto cada 300s asi no hay que refrescar la pagina
        }, 300);
    }
    
} 

let estaVivo = setInterval(function (){
    let dinoTop = window.getComputedStyle(dino).getPropertyValue("top");
    console.log(dinotop);
}, 300);
document.addEventListener("keyup", salto()); 

// 
function HandleKeyDown(ev){
    if(ev.keyCode == 32){
        Saltar();
    }
}
function Saltar(){
    if(dinoPosY === sueloY){
        saltando = true;
        velY = impulso;
        dino.classList.remove("dino-corriendo");
    }
}