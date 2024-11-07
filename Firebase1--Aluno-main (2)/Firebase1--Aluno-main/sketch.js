var jogador
var parede
var paredes = []
var inimigo
var inimigos = []
function setup() {
 createCanvas (windowWidth,windowHeight);
 jogador=new Player (width/2,height/2);
 parede=new Nivel_1 (0,0,0,100);
 paredes.push(new Nivel_1(0,0,100,1500));
 paredes.push(new Nivel_1(0,0,3000,100));
 paredes.push(new Nivel_1(1350,0,100,1500));
 paredes.push(new Nivel_1(0,650,3000,100));
 inimigos.push(new Inimigo (random (200,500),250,random (8,15)));
 inimigos.push(new Inimigo (random (100,200),250,random (8,15)));
 inimigos.push(new Inimigo (random (350,500),250,random (8,15)));
 inimigos.push(new Inimigo (random (150,2000),250,random (8,15)));
 inimigos.push(new Inimigo (random (200,600),250,random (8,15)));
 inimigos.push(new Inimigo (random (250,970),250,random (8,15)));
 inimigos.push(new Inimigo (random (450,870),250,random (8,15)));
 inimigos.push(new Inimigo (random (500,2000),250,random (8,15)));
 inimigos.push(new Inimigo (random (650,800),250,random (8,15)));
 inimigos.push(new Inimigo (random (750,900),250,random (8,15)));
 inimigos.push(new Inimigo (random (750,870),250,random (8,15)));
 inimigos.push(new Inimigo (random (750,2000),250,random (8,15)));
 inimigos.push(new Inimigo (random (750,2000),250,random (8,15)));
 inimigos.push(new Inimigo (random (750,2000),250,random (8,15)));
 inimigos.push(new Inimigo (random (1500,2000),250,random (8,15)));
 inimigos.push(new Inimigo (random (1500,2000),250,random (8,15)));
}


function draw() {
 background (0,164,232);
 jogador.mostrar ();
 jogador.andar ();
 parede.mostrar ();
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
        jogador.player.remove();
    }
}
for (var i = 0; i < inimigos.length; i++) {
    if (jogador.player.isTouching(inimigos[i].inimigo)) {
        jogador.player.remove();
    }
}

}

function windowResized () {
    resizeCanvas (windowWidth,windowHeight);
}


