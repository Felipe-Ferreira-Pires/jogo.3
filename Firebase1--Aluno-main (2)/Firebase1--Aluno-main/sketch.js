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
var invisivel = 0
var aqui
var sumir
var saida,saida2
var aqui2
var transicao = false
var quadrado2,quadrado
var rotacao = []
let gameOverState = false;
let sumirCriado = false;
let pegar = false
const DURACAO_TRANSICAO = 500;

function setup() {

 createCanvas (windowWidth,windowHeight);
 jogador=new Player ();
 
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
    
 fill ("black")
 text (" Clique aqui para iniciar o segundo nivel ! ", 1000,300)
 
 if (jogador.player.isTouching (aqui2) && invisivel ===1) {
    aqui2.visible= true
    invisivel=2
}
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


if (nivel==3) {

    for (var i of rotacao) {
        
        i.Velocidade();
        if (frameCount % 10===0) {
            var randomColor = color (random (255), random (255), random (255))
            i.sprite.shapeColor = randomColor 
            }
            
        }
    for (var i = 0; i < rotacao.length; i++) {
        if (jogador.player.isTouching(rotacao[i].sprite)) {
            jogador.player.remove();
            triggerGameOver(); // em resumo refaz a função [acredito que seja isso]
            return; // [retorna ao estado anterior ou seja false]
        }    
    }
    if (jogador.player.isTouching (quadrado)) {
        quadrado.remove ()
        pegar=true
        saida=createSprite (width/2 -500, height/2, 50,50)
        
      }
      if (pegar === true && jogador.player.isTouching (saida)) {
        saidafoi=true
        pegar = true
        nivel=4
        quadrado2=createSprite (width/2 +500,height/2,20,20)
    }


}
if (nivel == 4) {
    for (let i of rotacao) {
        i.Velocidade();
        if (frameCount % 10 === 0) {
            let randomColor = color(random(255), random(255), random(255));
            i.sprite.shapeColor = randomColor;
        }
    }


        for (var i = 0; i < rotacao.length; i++) {
            if (jogador.player.isTouching(rotacao[i].sprite)) {
                jogador.player.remove();
                triggerGameOver(); // em resumo refaz a funcao [acredito que seja isso]
                return; // [retorna ao estado anterior ou seja false]
            }    
        }
        if (jogador.player.isTouching(quadrado2)) {
    quadrado2.remove();
    pegar = true;
    saida2 = createSprite(width / 2 - 500, height / 2, 50, 50);
}
}
segundos=Math.floor ((millis()-tempo)/1000); //flor = arredondar valores [para o menor], math = valor matematica
fill ("Black");
text ("Tempo :" + segundos, 100,100);
passar_nivel ()
    }
    text ("Nivel :" + nivel , 100,200)
    
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
    for (var i = 0; i<inimigos.length; i ++) {
        inimigos [i].inimigo.remove ()
      
        
        }
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
    aqui = createSprite(1100, 350, 30, 30);
    aqui.shapeColor = "Black";
    /*destruir= createSprite (115,350,100,500);
    destruir.shapeColor = rgb (0,164,232);
    destruir.lifetime=100
    if (jogador.player.isTouching(destruir)) {
      jogador.player.remove ()
      triggerGameOver ()
    }*/
    passar= createSprite (118,550,135,100)
    passar.visible = false
    aqui2=createSprite (width/2 -200,height/2 +250, 5,5)
    aqui2.visible= false
}   


function Nivel_3 () {
    for (var i = 0; i<paredes.length; i ++) {
        paredes [i].parede.remove ()
        
        
        }
        
        paredes.push(new Nivel_1(0,0,100,1500));
        paredes.push(new Nivel_1(0,0,3000,100));
        paredes.push(new Nivel_1(1350,0,100,1500));
        paredes.push(new Nivel_1(0,650,3000,100)); 
        passar.remove ()
        aqui.remove ()
        aqui2.remove ()
        rotacao.push(new Rotacao(width/2,height/2,20,600,3))
        rotacao.push(new Rotacao(width/2,height/2,20,600,4))
        rotacao.push(new Rotacao(width/2,height/2,20,600,5))
        
        quadrado=createSprite (width/2 +500,height/2,20,20)
     
      
        
      }

function Nivel_4 () {

    for (var i = 0; i<paredes.length; i ++) {
        paredes [i].parede.remove ()
        
        
        }
        
     
    
    
    quadrado.remove ()
    rotacao.push (new Rotacao (width/2,height/2,20,600,3))
    rotacao.push (new Rotacao (width/2 -100,height/2,20,600,5))
    rotacao.push (new Rotacao (width/2 +100, height/2, 20, 600, 4))

}
function Nivel_5 () {
    quadrado2.remove ()
}
function keyPressed() {
    if (key === 'g' && gameOverState && nivel === 1) {
        restartNivelAtual(); 
    }
}
function mouseClicked () {
    if (nivel === 2) {
        if (aqui.overlapPoint (mouseX,mouseY) && gameOverState) {            
            restartGame()
            invisivel = 1
        }
        if (aqui2.overlapPoint (mouseX,mouseY) && gameOverState) {            
            restartGame()
            invisivel = 2
        }
        
    }
}
function restartGame() {
    vidas = 1;
    jogador = new Player(); 
    gameOverState = false; 
}

function passar_nivel () {
    if (segundos>1 && nivel==1) {
        transicao=true
        Nivel_2 ();
        nivel=2
       
    }else if (nivel==2 && jogador.player.isTouching(passar)) {
        Nivel_3();
        nivel=3;
        
       }else if (nivel == 4 && saidafoi===true) {
        
        Nivel_4();
    
    }
}

    function restartNivelAtual() {
        vidas = 1;
        jogador = new Player(); 
        paredes = [];
    
        if (nivel === 1) {
            //chamar_inimigos();
            
            paredes.push(new Nivel_1(0, 0, 100, 1500));
            paredes.push(new Nivel_1(0, 0, 3000, 100));
            paredes.push(new Nivel_1(1350, 0, 100, 1500));
            paredes.push(new Nivel_1(0, 650, 3000, 100));
        }
        gameOverState = false; 
    }

    
