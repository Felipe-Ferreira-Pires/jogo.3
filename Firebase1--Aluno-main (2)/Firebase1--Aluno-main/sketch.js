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
var ultima_fase = 1
var aqui
var sumir
var saida,saida2
var exit,exit2
var aqui2
var sair,sair2
var sair3=1
var nivelfoi=false
var transicao = false
var quadrado2,quadrado
var rotacao = []
let gameOverState = false;
let sumirCriado = false;
let pegar = false
let pegar2 = false 
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

 exit=createSprite (width/2 +600, height/2, 20, 20)
 exit.visible=false

 sair=createSprite (width/2 +600, height/2, 10, 10)
 sair.visible=false

 final=createSprite (width/2 +500,height/2,20,20)
 final.visible=false
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
        pegar = false
        nivel=4
        quadrado2=createSprite (width/2 +500,height/2,20,20)
    }


}
if (nivel == 4) {
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
                triggerGameOver(); // em resumo refaz a funcao [acredito que seja isso]
                return; // [retorna ao estado anterior ou seja false]
            }    
       
        }
        if (jogador.player.isTouching(quadrado2)) {
    quadrado2.remove();
    pegar = true;
    saida2 = createSprite(width / 2 - 500, height / 2, 50, 50);
}
      if (pegar === true && jogador.player.isTouching (saida2)) {
        saidafoi=true
        pegar = false
        saida2.remove ()
        nivel=5
      }
      /*if (pegar === true && jogador.player.isTouching (saida)) {
        saidafoi=true
        pegar = false
        nivel=4
        quadrado2=createSprite (width/2 +500,height/2,20,20)
    }*/
}
if (nivel ==5 ) {
     
     
    if (jogador.player.isTouching (exit)) {
        exit.remove()
        exit2=createSprite (width/2 -600, height/2, 20, 20)
        pegar2 = true
    }
    if (pegar2 === true && jogador.player.isTouching (exit2)) {
        nivel=6
        pegar2= false
        nivelfoi=true
    }
}

if (nivel==6) {
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
                triggerGameOver(); // em resumo refaz a funcao [acredito que seja isso]
                return; // [retorna ao estado anterior ou seja false]
            }    
       
        }
        if (jogador.player.isTouching (sair) && sair3 == 1 ) {
            sair3=2
            sair.remove()
            sair2=createSprite (width/2 -600, height/2, 20, 20)
            
        }
        if (sair3==2) {
           if (jogador.player.isTouching (sair2) && sair3 == 2) {
                saidafoi=true
                sair2.remove ()
                nivel=7
                console.log (nivel)
            }
        }


}

if (nivel===7) {
  if (jogador.player.isTouching (final) && ultima_fase==1 ) {
    final.remove()
    nivel=8
    nivelfoi=true
  }

}

segundos=Math.floor ((millis()-tempo)/1000); //flor = arredondar valores [para o menor], math = valor matematica
fill ("Black");
text ("Tempo :" + segundos, 100,100);
passar_nivel ()
    }
    fill ("black")
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
    destruir.lifetime=1000
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
        
    for (var i = 0; i<rotacao.length; i++) {
        rotacao [i].sprite.remove ()
    }
    
    
    saida.remove()
    quadrado.remove ()
    rotacao.push (new Rotacao (width/2,height/2,20,600,3))
    rotacao.push (new Rotacao (width/2 -100,height/2,20,600,5))
    rotacao.push (new Rotacao (width/2 +100, height/2, 20, 600, 4))
    
}
function Nivel_5 () {
    for (var i = 0; i<rotacao.length; i++) {
        rotacao [i].sprite.remove ()
    }

    exit.visible=true
    paredes.push(new Nivel_1(width/2,height/2- 300,1500,450));
    paredes.push(new Nivel_1(width/2,height/2+ 300,1500,450));
    inimigos.push(new Inimigo (random (1066, 366),250,random (8,15),random (-8,-6)));
    inimigos.push(new Inimigo (random (1066, 350),250,random (8,15),random (-8,-6)));
    inimigos.push(new Inimigo (random (1066, 366),250,random (8,15),random (-8,-6)));
}

function Nivel_6 () {
    for (var i = 0; i<paredes.length; i++) {
        paredes [i].parede.remove ()
    }

    for (var i = 0; i<inimigos.length; i ++) {
        inimigos [i].inimigo.remove ()
    }
    exit2.remove ()

 paredes.push(new Nivel_1(0,0,100,1500));
 paredes.push(new Nivel_1(0,0,3000,100));
 paredes.push(new Nivel_1(1350,0,100,1500));
 paredes.push(new Nivel_1(0,650,3000,100));

 rotacao.push (new Rotacao (width/2, height/2, 20, 600, 7))
 rotacao.push (new Rotacao (width/2, height/2, 20, 600, 5))
 rotacao.push (new Rotacao (width/2, height/2, 20, 600, 6))

 inimigos.push(new Inimigo (random (width/2 -300, width/2 -100),random (height/2 +300, height/2 +100),random (8,15),random (-8,-6)));
 inimigos.push(new Inimigo (random (width/2 -300, width/2 -100),random (height/2 +300, height/2 +100),random (8,15),random (-8,-6)));
 inimigos.push(new Inimigo (random (width/2 +300, width/2 +100),random (height/2 -300, height/2 -100),random (8,15),random (-8,-6)));
 inimigos.push(new Inimigo (random (width/2 +300, width/2 +100),random (height/2 -300, height/2 -100),random (8,15),random (-8,-6)));

 sair.visible=true
}

function Nivel_7 () {
    for (var i = 0; i<inimigos.length; i ++) {
        inimigos [i].inimigo.remove ()
    }
    for (var i = 0; i<rotacao.length; i++) {
        rotacao [i].sprite.remove ()
    }
    
   Inimigos_7 ()

   aqui3=createSprite (width/2 -600, height/2, 20, 20)
   final.visible=true
}
function keyPressed() {
    if (key === 'g' && gameOverState && nivel === 1) {
        restartNivelAtual(); 
    }
}

function Inimigos_7 () {
    inimigos.push(new Inimigo (width/2 +300,height/2 ,20,0));
    inimigos.push(new Inimigo (width/2 +225,height/2 ,21,0));
    inimigos.push(new Inimigo (width/2 +175,height/2 ,23,0));
    inimigos.push(new Inimigo (width/2 +100,height/2 ,27,0));
    inimigos.push(new Inimigo (width/2 +25,height/2 ,24,0));
    inimigos.push(new Inimigo (width/2 -70,height/2 ,26,0));
    inimigos.push(new Inimigo (width/2 -125,height/2 ,22,0));
    inimigos.push(new Inimigo (width/2 -200,height/2 ,27,0));
    inimigos.push(new Inimigo (width/2 -275,height/2 -100,24,0));
    inimigos.push(new Inimigo (width/2 -325,height/2 -200,26,0));
    inimigos.push(new Inimigo (width/2 -400,height/2 -100,22,0));
    inimigos.push(new Inimigo (width/2 -200,height/2 -300,27,0));

}

function Final () {
    for (var i = 0; i<paredes.length; i++) {
        paredes [i].parede.remove ()
    }

    for (var i = 0; i<inimigos.length; i ++) {
        inimigos [i].inimigo.remove ()
    }
    
    background ("black") 
    textAlign (CENTER)
    fill ("white")
    textSize (20)
    text ("Parabéns você chegou no fim do jogo, de seu feedback no link abaixo !",width/2 ,height/2)
    fill (66,152,209)
    textAlign (CENTER)
    text ("https://github.com/Felipe-Ferreira-Pires",width/2,height/2 +55)
    
}

function mouseClicked () {
    if (nivel === 2 || nivel === 7) {
        if (aqui.overlapPoint (mouseX,mouseY) && gameOverState) {            
            restartGame()
            invisivel = 1
        }
        if (aqui2.overlapPoint (mouseX,mouseY) && gameOverState) {            
            restartGame()
            invisivel = 2
        }
        if (aqui3.overlapPoint (mouseX,mouseY) && gameOverState) {
            restartGame ()
            invisivel = 3
        }
    }
}
function restartGame() {
    vidas = 1;
    jogador = new Player(); 
    gameOverState = false; 
}

function passar_nivel () {
    if (segundos>2 && nivel==1) {
        transicao=true
        Nivel_2 ()
        nivel=2
       
    }else if (nivel==2 && jogador.player.isTouching(passar)) {
        Nivel_3();
        nivel=3;
        
       }else if (nivel == 4 && saidafoi===true) {
        
        Nivel_4();
        saidafoi=false
    } else if (nivel == 5 && saidafoi===true){
        Nivel_5(); 
        saidafoi=false
    } else if (nivel == 6 && nivelfoi===true) {
        Nivel_6()
        nivelfoi=false
    } else if (nivel ==7 && saidafoi===true) {
        Nivel_7 () 
        saidafoi=false
    } else if (nivel==8 && nivelfoi==true)
        Final ()
        nivelfoi==false
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

    
