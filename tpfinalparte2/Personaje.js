class Personaje {
  constructor(){
    this.vida = 3;
    this.posX = 100;
    this.posY = 200;
    this.Color = color(0, 255, 200);
    this.velocidad = 4;
  }
  
  dibujar(){
  fill(this.Color);
  rect(this.posX, this.posY, 40, 60);
  }
  
  mover(){
   //Mueve arriba
  if(keyIsDown(87)){
    this.posY -= this.velocidad;
  }
  //Mueve izquierda
  if(keyIsDown(65)){
    this.posX -= this.velocidad;
  }
  //Mueve derecha
  if(keyIsDown(68)){
    this.posX += this.velocidad;
  }
  
  if(keyIsDown(83)){
    this.posY += this.velocidad;
  }
  //Limita movimiento en pantalla
  this.posX = constrain(this.posX,0,width -40);
  this.posY = constrain(this.posY,0,height -60);
  }
  
  estaVivo(){
    return this.vida > 0;
  }
}
