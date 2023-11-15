// se almacena el calculo del tiempo
var time = new Date();
//tiempo entre dos fotogramas
var deltaTime = 1;

//verifica si el documento está completamente cargado o en un estado interactivo.
if(document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(Init, 1);
}else{
    document.addEventListener("DOMContentLoaded", Init); 
}

// le vuelve a asignar a la variable time el calculo del timpo y llama a las funciones start y loop
var time = new Date();
// Variable para almacenar la diferencia de tiempo entre frames
var deltaTime = 0;

// Comprobar si el documento HTML ha cargado completamente antes de iniciar el juego
if(document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(Init, 1);
}else{
    document.addEventListener("DOMContentLoaded", Init); 
}

// Función que se llama cuando el documento está listo para inicializar el juego
function Init() {
    // Actualizar el tiempo al momento de la inicialización
    time = new Date();
    // Iniciar el juego
    Start();
    // Entrar en el bucle del juego
    Loop();
}

// Función principal del bucle del juego
function Loop() {
    // Calcular el tiempo transcurrido entre frames
    deltaTime = (new Date() - time) / 1000;
    // Actualizar el tiempo al momento actual
    time = new Date();
    // Llamar a la función de actualización del juego
    Update();
    // Solicitar el próximo cuadro de animación
    requestAnimationFrame(Loop);
}

// Lógica del juego
// (Se define la posición y velocidad de varios elementos del juego)

// ...

// Inicializar el juego al cargar el documento
function Start() {
    // Obtener referencias a elementos del juego mediante clases CSS
    gameOver = document.querySelector(".game-over");
    suelo = document.querySelector(".suelo");
    contenedor = document.querySelector(".contenedor");
    textoScore = document.querySelector(".score");
    dino = document.querySelector(".dino");
    // Agregar un evento para detectar la pulsación de la tecla de espacio
    document.addEventListener("keydown", HandleKeyDown);
}

// Actualizar el estado del juego en cada frame
function Update() {
    // Si el juego está parado, salir de la función de actualización
    if(parado) return;
    // Mover el dinosaurio
    MoverDinosaurio();
    // Mover el suelo
    MoverSuelo();
    // Decidir cuándo crear obstáculos
    DecidirCrearObstaculos();
    // Decidir cuándo crear nubes
    DecidirCrearNubes();
    // Mover obstáculos
    MoverObstaculos();
    // Mover nubes
    MoverNubes();
    // Detectar colisiones
    DetectarColision();
    // Aplicar la gravedad al dinosaurio
    velY -= gravedad * deltaTime;
}

// Manejar eventos de teclado (en este caso, detectar la tecla de espacio para hacer saltar al dinosaurio)
function HandleKeyDown(ev){
    if(ev.keyCode == 32){
        Saltar();
    }
}

// Función para hacer que el dinosaurio salte
function Saltar(){
    if(dinoPosY === sueloY){
        saltando = true;
        velY = impulso;
        dino.classList.remove("dino-corriendo");
    }
}

// Mover la posición vertical del dinosaurio
function MoverDinosaurio() {
    dinoPosY += velY * deltaTime;
    // Verificar si el dinosaurio ha tocado el suelo
    if(dinoPosY < sueloY){
        TocarSuelo();
    }
    // Aplicar la posición vertical al elemento HTML del dinosaurio
    dino.style.bottom = dinoPosY+"px";
}

// Lógica cuando el dinosaurio toca el suelo
function TocarSuelo() {
    dinoPosY = sueloY;
    velY = 0;
    // Cambiar la clase del dinosaurio a 'dino-corriendo' si estaba saltando
    if(saltando){
        dino.classList.add("dino-corriendo");
    }
    saltando = false;
}

// Mover el suelo horizontalmente para simular desplazamiento
function MoverSuelo() {
    sueloX += CalcularDesplazamiento();
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
}

// Calcular el desplazamiento en cada frame basado en la velocidad del escenario
function CalcularDesplazamiento() {
    return velEscenario * deltaTime * gameVel;
}

// ...

// Resto del código sigue la misma estructura con funciones específicas para distintas partes del juego
// (Crear obstáculos, crear nubes, mover obstáculos, mover nubes, ganar puntos, game over, detectar colisiones)
// ...

// Función para detectar colisiones entre dos elementos
function IsCollision(a, b, paddingTop, paddingRight, paddingBottom, paddingLeft) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height - paddingBottom) < (bRect.top)) ||
        (aRect.top + paddingTop > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width - paddingRight) < bRect.left) ||
        (aRect.left + paddingLeft > (bRect.left + bRect.width))
    );
}