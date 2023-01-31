//FORMULARIO

function subirAka(){

    const label = document.querySelector(".aka");
    
    label.style.transform = "translate(-1em,-1.5em) scale(.7)";
    label.style.transition = ".5s";
    
}
    
function subirAge(){
    
    const label = document.querySelector(".age");
        
    label.style.transform = "translate(-1em,-1.5em) scale(.7)";
    label.style.transition = ".5s";
        
}
    
function subirPassword(){
    
    const label = document.querySelector(".password");
            
    label.style.transform = "translate(-1em,-1.5em) scale(.7)";
    label.style.transition = ".5s";
            
}    

// APARECE PARTE DERECHA
    
function magia(){
const titulo = document.querySelector(".right-title-container");
titulo.style.transform = "translateY(25vh)"


const jordan = document.querySelector(".uno");
jordan.style.opacity = "1";
const bebe = document.querySelector(".dos");
bebe.style.opacity = "1";
const ricardo = document.querySelector(".tres");
ricardo.style.opacity = "1";

document.querySelector(".play").style.opacity = "1";
    
}
//SELECCIONAR JUGADOR

let i = 1;
function michael(){
    document.querySelector(".player").style.backgroundImage = "url('player.png')";
}
function bebe(){
    i=1;
    document.querySelector(".player").style.backgroundImage = "url('player" + i + ".png')";
}
function rodrigo(){
    i=2;
    document.querySelector(".player").style.backgroundImage = "url('player" + i + ".png')";
}


//JUEGO

let puntos=0;
let tiempo=20;

//CRONOMETRO

function restarTiempo(){
    tiempo--;

    if(tiempo === 0){
        const pantalla = document.querySelector(".pantallita");
        pantalla.style.color = "red";
        pantalla.innerHTML = "TIME OUT";
        document.querySelector(".pantalla").innerHTML ="PERDISTE GAY";
        puntos=0;
        document.querySelector(".player").style.margin ="0px";
        document.querySelector(".player").removeEventListener("mouseover",sumarPuntos);
    }else if(tiempo > 0){
        document.querySelector(".pantallita").innerHTML = "Tiempo: " + tiempo;
    }
}
function start(){
    document.querySelector(".player").addEventListener("mouseover",sumarPuntos);
    setInterval(restarTiempo,1000);
}

//PUNTAJE

function sumarPuntos(){
    puntos++;

    document.querySelector(".pantalla").innerHTML = "Puntos: <b>" + puntos + "/40<b>";

    const jugador = document.querySelector(".player");

    const num1 = Math.round(Math.random()*420);
    const num2 = Math.round(Math.random()*420);

    jugador.style.marginTop = num1 + "px";
    jugador.style.marginLeft = num2 + "px";

    if(puntos === 40){
        document.querySelector(".pantallita").innerHTML = "GANASTE REY";
        document.querySelector(".pantalla").innerHTML ="GANASTE REY";
        puntos=0;
        tiempo=0;
        jugador.style.margin ="0px";
        document.querySelector(".player").removeEventListener("mouseover",sumarPuntos)

    }

}





