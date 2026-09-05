function preload(){
  Precarga();
}

function setup() {
  
  createCanvas(800,600);

}

function draw() {
 background(0);
 Fondo();
 
 ActualSonic();
 MoverSonic();
 
 let FramesActuales = FramesSonic();
 let FrameSanic = elegirFrame(FramesActuales, 27);
 image(FrameSanic,SonicX,SonicY,FrameSanic.width * EscalaSonic, FrameSanic.height * EscalaSonic);
 
 ActualHuevo();
 MoverEggman();
 
 if (EstadoEggman === 'Volando'){
  let FramesEggmanActuales = FramesHuevo();
  let FrameHuevo2 = elegirFrame(FramesEggmanActuales, 8);
   image(FrameHuevo2,EggmanX,EggmanY,FrameHuevo2.width * EscalaEggman, FrameHuevo2.height * EscalaEggman);
 }

 ActualAmy();
 MoverAmy();
 
 let FramesActualesAmy = FramesAmy();
 let FrameAmy2 = elegirFrame(FramesActualesAmy,20);
  image(FrameAmy2,AmyX,AmyY,FrameAmy2.width * EscalaAmy, FrameAmy2.height * EscalaAmy);
  
 if (EstadoAmy === 'EnamoradaFinal'){
   let FrameCocoro = elegirFrame(FramesCorazon,9);
   image(FrameCocoro,AmyX - 15, AmyY - 25, FrameCocoro.width * EscalaCocoro, FrameCocoro.height * EscalaCocoro);
 }
}
