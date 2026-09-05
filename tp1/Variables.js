//Background

let Cielo;

let Nube;
let posXNube = 800;

let Montanas;

let Reflejo;
let Reflejo2;

let Pasto1;
let posYPasto = 350;
let Pasto2;
let posYPasto2 = 370;
let Pasto3;
let posYPasto3 = 510;
let Pasto4;
let posYPasto4 = 550; 

//Sonic

let FramesSonicCorriendo = [];
let FramesSonicFrenando = [];
let FramesSonicQuieto = [];

let SonicX = -60;
let ContadorSonic = 0;
let EstadoSonic = 'Corriendo';


const SonicY = 290;
const VelocidadSonic = 5;
const DuracionFreno = 30;
const EscalaSonic = 2.0;
const XFrenoS = 390;


//Amy


let FramesAmyCaminando = [];
let FramesAmyMirando = [];
let FramesAmyEnamorada = [];

let AmyX = -60;
let ContadorAmy = 0;
let EstadoAmy = 'Caminar';

const AmyY = 460;
const VelocidadAmy = 5;
const EscalaAmy = 2.7;
const XFrenoA = 280;

//Eggman

let FramesEggmanVolando = [];

let EggmanX = -60;
let ContadorHuevo = 0; 
let EstadoEggman = 'Esperando';

const EggmanY = 100;
const VelocidadEggman = 7; //Uno más que Sonic únicamente como referencia
const EscalaEggman = 1.0;

//Emoticon

let FramesCorazon = [];

const EscalaCocoro = 1.4;
