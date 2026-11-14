class Obstaculo {
  constructor(){
   this.posiblesY = [45, 200, 340]; 
   this.posY = random(this.posiblesY);
   
   this.posX = random(-1500, -100);
   
   this.velocidad = 2.5;
   this.ancho = 30;
   this.alto = 30;
  }
 
 mover(){
    this.posX += this.velocidad; 
 }
 
 dibujar(){
    fill(0, 200, 255);
    noStroke();
    rect(this.posX, this.posY, this.ancho, this.alto);
  }
  
 fueraDePantalla(){
    return this.posX > width + 50;
  }
}
