 class Rotacao {
  constructor (x,y,width,height,rotationSpeed) {
    this.sprite=createSprite ( x, y, width, height)
    this.rotationSpeed=rotationSpeed
    /*this.rotacaos.shapeColor = Color*/
  }
  Mostrar () {
    drawSprites ()
  }
  Velocidade () {
  this.sprite.rotation+=this.rotationSpeed 
  }
 }