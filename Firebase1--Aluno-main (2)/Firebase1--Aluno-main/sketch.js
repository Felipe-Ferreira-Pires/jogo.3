var jogador
var parede
var paredes = []
var inimigo
var inimigos = []
var tempo 
var segundos
var vidas = 10
var nivel = 1
var tempo_transicao = 0
var aqui
var sumir
var transicao = false
let gameOverState = false;
let sumirCriado = false;
const DURACAO_TRANSICAO = 500;

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
 
if (transicao) {

    if (millis() - tempo_transicao>= DURACAO_TRANSICAO) {
        transicao=false;
        passar_nivel ()
        
    }
} else {

        background (0,164,232);
 jogador.andar ();
 drawSprites ();
 if (sumirCriado && jogador.player.isTouching(sumir)) {
    sumir.remove(); // Remove o sprite
    sumirCriado = false; // Atualiza o estado para indicar que sumir foi removido
}

 if (nivel === 2) {
    
 fill ("golden")
 text (" Clique aqui para iniciar o segundo nivel ! ", 1000,300)
 }
 
 for (let i = 0; i < inimigos.length; i++) {
    inimigos[i].mostrar();

    // Colisão entre inimigos e paredes
    for (let j = 0; j < paredes.length; j++) {
        inimigos[i].inimigo.bounceOff(paredes[j].parede);
    }
}

for (let i = 0; i < paredes.length; i++) {
    if (jogador.player.isTouching(paredes[i].parede)) {
        vidas--;
        if (vidas <= 0) {
            jogador.player.remove(); 
            triggerGameOver(); // em resumo refaz a função [acredito que seja isso]
            return; // [retorna ao estado anterior ou seja false]
        }
    }
}
for (var i = 0; i < inimigos.length; i++) {
    if (jogador.player.isTouching(inimigos[i].inimigo)) {
        jogador.player.remove();
        triggerGameOver(); // em resumo refaz a função [acredito que seja isso]
        return; // [retorna ao estado anterior ou seja false]
    }
}
segundos=Math.floor ((millis()-tempo)/1000); //flor = arredondar valores [para o menor], math = valor matematica
fill ("Black");
text ("Tempo :" + segundos, 100,100);
passar_nivel ()
    }
    restart ()
}
function triggerGameOver() {
    gameOverState = true; // Ativa o estado de Game Over
    
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

function Nivel_2() {
    inimigos = [];
    paredes.push(new Nivel_1(300, 0, 50, 1100));
    paredes.push(new Nivel_1(390, 660, 60, 1168));
    paredes.push(new Nivel_1(215, 660, 60, 1168));
    paredes.push(new Nivel_1(480, 0, 50, 1100));
    paredes.push(new Nivel_1(575, 660, 60, 1168));
    paredes.push(new Nivel_1(670, 0, 50, 1100));
    paredes.push(new Nivel_1(765, 660, 60, 1168));
    paredes.push(new Nivel_1(0, 0, 100, 1500));
    paredes.push(new Nivel_1(0, 0, 3000, 100));
    paredes.push(new Nivel_1(1350, 0, 100, 1500));
    paredes.push(new Nivel_1(0, 650, 3000, 100));

    aqui = createSprite(1100, 350, 20, 20);
    aqui.shapeColor = "Black";
}


function Nivel_3 () {
 
}

function keyPressed() {
    if (key === 'g' && gameOverState && nivel !== 2) {
        restartNivelAtual(); // Reinicia o nível atual
    }
}
function mouseClicked() {
    if (nivel === 2) {
        if (aqui.overlapPoint (mouseX,mouseY) && gameOverState) {            
            restartNivelAtual ();
            
        }
    }
}
function restartGame() {
    vidas = 1;
    //nivel = 2;
    jogador = new Player(); // Recria o jogador
    //inimigos = [];
    paredes = [];
    gameOverState = false; // Sai do estado de Game Over
    //tempo = millis(); // Reinicia o tempo
    
}

function passar_nivel () {
    if (segundos>5 && nivel==1) {
        transicao=true
        Nivel_2 ();
        nivel=2
        
        /*if (mouseX<1051 && mouseY>320) {
            transicao=true
            nivel=2 
            
        }*/
       } else if (nivel==2) {

        Nivel_3 ();

       }
       
    }

    function restartNivelAtual() {
        // Reiniciar variáveis e estado do nível atual
        vidas = 1;
        //segundos = 0;
        jogador = new Player(); // Recria o jogador
        //inimigos = [];
        paredes = [];
    
        // Recarrega os inimigos e paredes do nível atual
        if (nivel === 1) {
            //chamar_inimigos();
            
            paredes.push(new Nivel_1(0, 0, 100, 1500));
            paredes.push(new Nivel_1(0, 0, 3000, 100));
            paredes.push(new Nivel_1(1350, 0, 100, 1500));
            paredes.push(new Nivel_1(0, 650, 3000, 100));
        } else if (nivel === 2) {
            Nivel_2();
        } else if (nivel === 3) {
            Nivel_3();
        }
    
        gameOverState = false; // Sai do estado de Game Over
        //tempo = millis(); // Reinicia o tempo
    }
function restart () {
}
