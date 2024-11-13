var jogador
var parede
var paredes = []
var inimigo
var inimigos = []
var tempo 
var segundos
var vidas = 10
var nivel = 1
function setup() {
 createCanvas (windowWidth,windowHeight);
 jogador=new Player ();
 parede=new Nivel_1 (0,0,0,100);
 paredes.push(new Nivel_1(0,0,100,1500));
 paredes.push(new Nivel_1(0,0,3000,100));
 paredes.push(new Nivel_1(1350,0,100,1500));
 paredes.push(new Nivel_1(0,650,3000,100));
 
 chamar_inimigos ();
 tempo=millis ();
 mouseX=width/2
 mouseY=width/2
}


function draw() {
 background (0,164,232);
 jogador.andar ();
 drawSprites ();

 
 for (let i = 0; i < inimigos.length; i++) {
    inimigos[i].mostrar();

    // Verifica a colisão entre cada inimigo e cada parede
    for (let j = 0; j < paredes.length; j++) {
        inimigos[i].inimigo.bounceOff(paredes[j].parede); // Colisão com bounceOff
    }
}
 for (var i = 0; i < paredes.length; i++) {
    if (jogador.player.isTouching(paredes[i].parede)) {
        vidas--
        if (vidas<0) {
        jogador.player.remove();
    }
    }
}
for (var i = 0; i < inimigos.length; i++) {
    if (jogador.player.isTouching(inimigos[i].inimigo)) {
        jogador.player.remove();
    }
}
segundos=Math.floor ((millis()-tempo)/1000); //flor = arredondar valores [para o menor], math = valor matematica
fill ("Black");
text ("Tempo :" + segundos, 100,100);
passar_nivel ()

}

function chamar_nivel () {
    passar_nivel ();
}

function windowResized () {
    resizeCanvas (windowWidth,windowHeight);
}

function chamar_inimigos () {
 inimigos.push(new Inimigo (random (200,500),250,random (8,15),random (-8,-6)));
 inimigos.push(new Inimigo (random (100,200),250,random (8,15),random (-8,-8)));
 inimigos.push(new Inimigo (random (350,500),250,random (8,15),random (8,7)));
 inimigos.push(new Inimigo (random (150,2000),250,random (8,15),random (8,6)));
 inimigos.push(new Inimigo (random (200,600),250,random (8,15),random (8,5)));
 inimigos.push(new Inimigo (random (250,970),250,random (8,15),random (8,-8)));
 inimigos.push(new Inimigo (random (450,870),250,random (8,15),random (8,8)));
 inimigos.push(new Inimigo (random (500,2000),250,random (8,15),random (-8,-7)));
 inimigos.push(new Inimigo (random (650,800),250,random (8,15),random (8,6)));
 inimigos.push(new Inimigo (random (750,900),250,random (8,15),random (8,5)));
 inimigos.push(new Inimigo (random (750,870),250,random (8,15),random (-8,-8)));
 inimigos.push(new Inimigo (random (750,2000),250,random (8,15),random (8,9)));
 inimigos.push(new Inimigo (random (750,2000),250,random (8,15),random (-8,-10)));
 inimigos.push(new Inimigo (random (750,2000),250,random (8,15),random (-8,-10)));
 inimigos.push(new Inimigo (random (1500,2000),250,random (8,15),random (8,5)));
 inimigos.push(new Inimigo (random (1500,2000),250,random (8,15),random (8,8)));
 
}

function Nivel_2 () {
 inimigos= [];
 paredes.push(new Nivel_1(300,0,50,1100)); 
 paredes.push(new Nivel_1(390,660,60,1168));
 paredes.push(new Nivel_1(215,660,60,1168));
 paredes.push(new Nivel_1(480,0,50,1100));
 paredes.push(new Nivel_1(575,660,60,1168));
 paredes.push(new Nivel_1(670,0,50,1100));
 paredes.push(new Nivel_1(765,660,60,1168));
}
function Nivel_3 () {
alert ("Chegou !")
}


function passar_nivel () {
    if (segundos>1) {
        Nivel_2 ();
       } else if (jogador.x<=100 && jogador.y>=300) {
        alert ("Teste")
        Nivel_3 ();

       }
    }

function nivel () {

}
