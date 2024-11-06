var jogador
var parede
var paredes = []

function setup() {
 createCanvas (windowWidth,windowHeight);
 jogador=new Player (width/2,height/2);
 parede=new Nivel_1 (500,500,0,100);
 paredes.push(new Nivel_1(0,0,100,1500));
 paredes.push(new Nivel_1(0,0,3000,100));
 paredes.push(new Nivel_1(1350,0,100,1500));
 paredes.push(new Nivel_1(0,650,3000,100));
 
}


function draw() {
 background ("black");
 jogador.mostrar ();
 jogador.andar ();
 parede.mostrar ();
 drawSprites ();
 for (var i=0;i<paredes.length;i++) {
    if (jogador.player.isTouching (paredes[i])) {
        jogador.player.remove ()
    }

 }

}

function windowResized () {
    resizeCanvas (windowWidth,windowHeight);
}


