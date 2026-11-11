class Enemigo {
 constructor(){
   this.posX = 50;
   this.posY = 300;
   this.Color = color(255,0,0);
 }
 
 dibujar(){
  fill(this.Color);
  rect(this.posX, this.posY, 50, 60);
 }
 
 mata(){
  //lógica para que al tocar al jugador lo mate y o pierda una vida, o lo mate instantáneamente
 }
 
}
