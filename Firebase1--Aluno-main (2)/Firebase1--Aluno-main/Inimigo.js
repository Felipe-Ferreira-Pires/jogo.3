class Inimigo {
    constructor (x,y, velY) {
        this.inimigo=createSprite (x,y,30,30)
        this.inimigo.shapeColor=color ("red")
        this.inimigo.velocity.y=velY
    }
    mostrar () {
        drawSprites ();
 }
}