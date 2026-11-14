let objJuego;
let fondoMarino;
let sonidoGolpe, gana, pierde, musicaFondo;

function preload(){
 fondoMarino = loadImage("assets/fondo-marino.png");
 
 // Sonidos y Música
 sonidoGolpe = loadSound('assets/Punch.mp3');
 gana = loadSound('assets/Win.mp3');
 pierde = loadSound('assets/Lose.mp3');
 musicaFondo = loadSound('assets/Music.mp3');
}

function setup() {
 createCanvas(800,400);
 objJuego = new Juego();
}


function draw() {
 objJuego.dibujar();
}

function keyPressed(){
  //Instrucciones y Créditos botones acá
  
  //Reiniciar con la tecla R
  if(keyCode === 82 && objJuego.estado !== "jugando"){
    objJuego.reiniciar();
   }
   
  if(!musicaFondo.isPlaying()){
    musicaFondo.loop();
    musicaFondo.setVolume(0.4);
  }
 }
