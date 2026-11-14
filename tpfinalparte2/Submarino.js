class Submarino {
  constructor(){
    this.posX = 80;       
    this.posY = 200;    
    this.ancho = 60;
    this.alto = 40;
  }

  dibujar(){
    noStroke();
    rect(this.posX, this.posY, this.ancho, this.alto);
  }
}
