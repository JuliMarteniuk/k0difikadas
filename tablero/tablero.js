const dino = document.getElementByClass("dino");

function salto(){
    if(dino.classList != "salto"){ //si no esta puesto el class salto entra
        dino.classList.add("salto"); //se le agrega el slato

        setTimeout(function (){
            dino.classList.remove("salto") // Se le saca el class salto cada 300s asi no hay que refrescar la pagina
        }, 300);
    }
    
} 

let estaVivo = setInterval(function (){
    let dinoTop = window.getComputedStyle(dino).getPropertyValue("top");
    console.log(dinotop);
}, 300);
document.addEventListener("keydown", function (event){
    salto();
}); 

