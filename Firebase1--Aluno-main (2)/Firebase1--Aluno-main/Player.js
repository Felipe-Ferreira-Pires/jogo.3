class Player {
 constructor (x ,y) {
  this.player = createSprite (x,y,20,20);
  this.player.shapeColor = color (61,46,34);
  
 }

 mostrar () {

    drawSprites ();
    
 }

 andar () {
    if (keyDown("w")){
      this.player.y-=7
    }
    if (keyDown("s")){
      this.player.y+=7
    }
    if (keyDown("a")){
      this.player.x-=7
    }
    if (keyDown("d")){
      this.player.x+=7
    }
 }
}