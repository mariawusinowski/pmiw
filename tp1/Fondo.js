function Fondo(){
 image(Cielo,0,0,800,600);
 image(Nube,posXNube,70,250,80);
 image(Montanas,0,230,800,140);
 image(Reflejo,0,370,800,140);
 image(Reflejo2,0,500,800,60);
 
 posXNube = posXNube - 2.3;
 
 if (posXNube < -240){
   posXNube = 800;
 }
 
 for (let x = 0; x < 800; x += 38) { //Todo esto es para hacer pasto profe :sob:, se veía muy pixeleado sino.
  image(Pasto1,x,posYPasto,38,30);
 }
 for (let x = 0; x < 800; x += 38){
   image(Pasto2,x,posYPasto2,38,22);
 }
 
 for (let x = 0; x < 800; x += 50) {
   image(Pasto3,x,posYPasto3,50,50);
  }
 for (let x = 0; x < 800; x += 50) {
   image(Pasto4,x,posYPasto4,50,50);
  }
}
