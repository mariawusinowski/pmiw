function Pantallas(fondos, texto){
  image(fondos,0,0,800,450);
  fill(169,213,255,80);
  rect(30,320,690,120,20);
  fill(0);
  textAlign(LEFT);
  textSize(14);
  stroke(0);
  
   if(pantallaActual === 0 && parrafo === 0){
     text(texto[0],posXtexto,340,650,80);
    }
    else if(parrafo === 1){
    text(texto[1],posXtexto,340,650,80);
    }
    else if(parrafo === 2){
    text(texto[2],posXtexto,340,650,80);
    }
  }
  BotonesDecision();
}

function BotonesDecision(){
 if(pantallaActual == 0){
 
  //Botón 1
  fill(255);
  stroke(0);
  rect(40,250,350,50,8);
  
  //Botón 2
  rect(410,250,350,50,8);
  
  //Texto en botón
  fill(0);
  noStroke();
  textSize(13);
  textAlign(CENTER,CENTER);
  text("Explorar la saliente cerca del seeker",40,250,350,50);
  text("Soltarte del Maray y bucear con el Seeker",410,250,350,50);
}

 if(pantallaActual == 6){
  fill(255);
  stroke(0);
  rect(550,250,200,50,8);
  
  fill(0);
  noStroke();
  textSize(10);
  textAlign(CENTER,CENTER);
  text("Siguiente",550,250,200,50,8);
}

 if(pantallaActual == 11){
  fill(255);
  stroke(0);
  rect(40,250,350,50,8);
  rect(410,250,350,50,8);
  
  fill(0);
  noStroke();
  textSize(10);
  textAlign(CENTER,CENTER);
  text("Esperar a que se vaya",40,250,350,50);
  text("Abandonar el Seeker",410,250,350,50);
}
   }
