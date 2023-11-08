// const dino = document.getElementByClass("dino");
// const square = [];
// let score = 0;

// //Usa los switch de pacman para saltar

// function salto(e){
//     //getElementById(tablero); 
//     if(dino.classList != "salto"){ //si no esta puesto el class salto entra
//         dino.classList.add("salto"); //se le agrega el salto

//         console.log(e.keycode);
//         switch(e.keycode){
//             case 32: 

//         }

//         setTimeout(function (){
//              dino.classList.remove("salto") // Se le saca el class salto cada 300s asi no hay que refrescar la pagina
//         }, 300);
//     }
    
// } 

// let estaVivo = setInterval(function (){
//     let dinoTop = window.getComputedStyle(dino).getPropertyValue("top");
//     console.log(dinotop);
// }, 300);
// document.addEventListener("keyup", salto()); 

// // 
// function HandleKeyDown(ev){
//     if(ev.keyCode == 32){
//         Saltar();
//     }
// }
// function Saltar(){
//     if(dinoPosY === sueloY){
//         saltando = true;
//         velY = impulso;
//         dino.classList.remove("dino-corriendo");
//     }
// }

var sueloY=22;
var velY=0;
var impulso=900;
var gravedad=2500;

var dinoposicionX=42;
var dinoposicionY=sueloY;
var sueloX=0;
var velEscenario = 1280/3;
var gameVel = 1;
var score = 0;
var parado= false;
var saltando = false;
var contenedor;
var dino;
var textoscore;
var suelo;
var gameover;
function Start(){
    gameover = document.querySelector(".game-over");
    suelo=document.queryselector(".suelo");
    contenedor=document.queryselector(".tablero");
    textoscore=document.queryselector(".score");
    dino=document.queryselector(".dino");
    document.addEventListener("keydown", handlekeydown);
}
function handlekeydown(ev){
    if(ev.keycode==32){
        saltar();
    }
}
function Update(){
    moversuelo();
    moverdinosaurio();
    velY-=gravedad*deltatime;
}

function moversuelo(){
    sueloX+=calculardesplazamiento();
    suelo.style.left=-(sueloX%contenedor.clientwidth)+"px";
}

function calculardesplazamiento(){
    return velEscenario*deltatime*gameVel;
}

function saltar(){
    if (dinoposicionY==sueloY){
        saltando=true;
        velY=impulso;
        dino.classlis.remove("dino-corriendo");
    }
}

function moverdinisaurio(){
    dinoposicionY+=velY*deltatime;
    if (dinoposicionY<sueloY){
        tocarsuelo();
    }
    dino.style.bottom=dinoposicionY+"px";
}

function tocarsuelo(){
    dinoposicionY=sueloY;
    velY=0;
    if (saltando){
        dino.classlist.add("dino-corriendo");
    }
    saltando=false;
}