class Personaje {
  constructor(){
    this.vida = 3;
    this.posX = 100;
    this.posY = 200;
    this.Color = color(0, 255, 200);
  }
  
  dibujar(){
  fill(this.Color);
  rect(this.posX, this.posY, 40, 60);
  }
  
  moverIzquierda(){
  
  }
  
  moverDerecha(){
  
  }
  
  estaVivo(){
  
  }
}
