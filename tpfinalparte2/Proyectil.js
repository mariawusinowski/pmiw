class Proyectil {
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 4;
    this.colorProyectil = color(220,50,180);
  }
  
  dibujar(){
   fill(this.colorProyectil);
   ellipse(this.posX,this.posY,30,30);
  }
  
  mover(){
  this.posX -= this.velocidad;
  }
  
  fueraDePantalla(){
    return this.posX < -30;
  }
}
