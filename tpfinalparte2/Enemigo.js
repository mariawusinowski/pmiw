class Enemigo {
 constructor(){
   this.posX = 750;
   this.posiblesPosicionesY = [120,190,270];
   this.posY = this.posiblesPosicionesY[1];
   
   this.contadorDisparos = 0;
   this.disparosParaCambiar = 4;

   this.Color = color(180,30,180);
   }
 
 cambiarPosicion(){
   let indiceAleatorio = floor(random(this.posiblesPosicionesY.length));
   this.posY = this.posiblesPosicionesY[indiceAleatorio];
 }
 
 dibujar(){
  fill(this.Color);
  ellipse(this.posX, this.posY, 80, 100);
 }
}
