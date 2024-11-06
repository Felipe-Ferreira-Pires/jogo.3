class Nivel_1 {
    constructor (x,y,width,height) {
        this.parede=createSprite (x, y, width, height);
        this.parede.shapeColor = color (46,207,100);
    }
    mostrar () {
        drawSprites ();
    }

    
}