class Player {
 constructor () {
  this.player = createSprite (width/2,500,20,20);
  this.player.shapeColor = color (61,46,34);
  
 }

 mostrar () {

  drawSprites ()
  
 }

 andar () {
    /*if (keyDown("w")){
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
    }*/
      this.player.x=mouseX
      this.player.y=mouseY
      console.log (mouseY,mouseX)
 }
}
