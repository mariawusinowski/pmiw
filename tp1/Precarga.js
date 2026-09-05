function Precarga(){
  Cielo = loadImage("data/Cielo.png");
  Nube = loadImage("data/Nube.png");
  Montanas = loadImage("data/Montanas.png");
  Reflejo = loadImage("data/Reflejo.png");
  Reflejo2 = loadImage("data/Reflejo2.png");
  Pasto1 = loadImage("data/Pasto1.png");
  Pasto2 = loadImage("data/Pasto2.png");
  Pasto3 = loadImage("data/Pasto3.png");
  Pasto4 = loadImage("data/Pasto4.png");
  
  FramesSonicCorriendo = cargarAccion('Corriendo',4);
  FramesSonicFrenando = cargarAccion('Detenerse',4);
  FramesSonicQuieto = cargarAccion('MA',9);
  
  
  FramesAmyCaminando = cargarAccion('Caminar',8);
  FramesAmyMirando = cargarAccion('MS',6);
  FramesAmyEnamorada = cargarAccion('Enamorada',4);
  FramesAmyEnamoradaFinal = cargarAccion('EnamoradaFinal',3);
  
  FramesEggmanVolando = cargarAccion('Volando',2);
  
  FramesCorazon = cargarAccion('Corazones',3);
  
}

//Cargar los sprites para los 3

function cargarAccion(nombre, cantidad) {
  let frames = [];
  for (let i = 1; i <= cantidad; i++) {
    frames.push(loadImage('data/' + nombre + '_' + i + '.png'));
  }
  return frames;
}

function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}

//Sonic

function ActualSonic(){
  ContadorSonic++;
  
  if (EstadoSonic === 'Corriendo' && SonicX >= XFrenoS){
    EstadoSonic = 'Detenerse';
    ContadorSonic = 0;
  }
  else if (EstadoSonic === 'Detenerse' && ContadorSonic > DuracionFreno){
  EstadoSonic = 'MA';
  ContadorSonic = 0;
  }
  else if (EstadoSonic === 'MA' && ContadorSonic > 120){
  EstadoSonic = 'Escapando';
  ContadorSonic = 0;
  }
}

function MoverSonic(){
  if (EstadoSonic === 'Corriendo' || EstadoSonic === 'Escapando'){
    SonicX += VelocidadSonic;
  }
}

function FramesSonic(){
 if (EstadoSonic === 'Corriendo' || EstadoSonic === 'Escapando'){
 return FramesSonicCorriendo;
 }
 if (EstadoSonic === 'Detenerse'){
 return FramesSonicFrenando;
 }
 if (EstadoSonic === 'MA'){
 return FramesSonicQuieto;
 }
}

//Eggman

function ActualHuevo(){
  if (EstadoEggman === 'Esperando' && EstadoSonic === 'MA'){
  EstadoEggman = 'Volando';
  ContadorHuevo = 0;
  }
}

function MoverEggman(){
 if (EstadoEggman === 'Volando'){
 EggmanX += VelocidadEggman;
 }
}

function FramesHuevo() {
 return FramesEggmanVolando;
}

//Amy

function ActualAmy (){
  ContadorAmy++; 
 
  if (EstadoAmy === 'Caminar' && AmyX >= XFrenoA){
  EstadoAmy = 'MS';
  ContadorAmy = 0;
  }
  else if (EstadoAmy === 'MS' && EstadoSonic === 'MA' && ContadorAmy >= 40){
   EstadoAmy = 'Enamorada';
   ContadorAmy = 0;
  }
  else if (EstadoAmy === 'Enamorada' && ContadorAmy > 120){
    EstadoAmy = 'EnamoradaFinal';
    ContadorAmy = 0;
  }
  else if (EstadoAmy === 'EnamoradaFinal' && ContadorAmy > 140){
  Reinicio();
  }
}

function MoverAmy(){
  if (EstadoAmy === 'Caminar'){
 AmyX += VelocidadAmy; 
  }
}

function FramesAmy(){
  if (EstadoAmy === 'Caminar'){
   return FramesAmyCaminando;
  }
  if (EstadoAmy === 'MS'){
   return FramesAmyMirando;
  }
  if (EstadoAmy === 'Enamorada'){
   return FramesAmyEnamorada;
  }
  if (EstadoAmy === 'EnamoradaFinal'){
   return FramesAmyEnamoradaFinal;
  }
}
