

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