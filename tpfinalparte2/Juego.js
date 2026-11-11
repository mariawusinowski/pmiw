class Juego {
 constructor(){
   this.crearEnemigo();
   this.crearPersonaje();
   this.crearObstaculo();
 }
 
 dibujar(){
  background(20, 40, 60); // Fondo marino básico
  this.personaje.dibujar();
  this.enemigo.dibujar();
  //this.obstaculo.dibujar();
 }
 
 iniciar(){
 
 }
 
 crearEnemigo(){
  this.enemigo = new Enemigo();
 }
 
 crearPersonaje(){
  this.personaje = new Personaje();
 }
 
 crearObstaculo(){
  this.obstaculo = new Obstaculo();
 }
 
 personajeGana(){
 
 }
}
