class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos
        this.yPos = yPos
        this.radius = radius
    }

    get surface() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    move(xOffset, yOffset) {
        this.xPos += xOffset
        this.yPos += yOffset
    }

    show() {
        console.log(" xPos : " + circle.xPos + " yPos : " + circle.yPos + " radius : " + circle.radius + " surface : " + circle.surface)
    }
}

let circle = new Circle(0,0,2)

circle.show()
circle.move(1,1)
circle.show()
circle.move(-1,5)
circle.show()
circle.move(2,-2)
circle.show()

// tout d'abord, MERCI ADRIEN !!!!
//
// Ce code n'est pas le mien, je l'avoue, je le confesse. Ayant eu des difficultés à partir de la phase 4.2 j'ai été prise par le temps et donc ne saisissant pas ce que je devais faire une fois cette étape atteinte
// class Circle {

//        constructor(xPos, yPos, radius) {
  //              this.xPos = xPos
    //            this.yPos = yPos
      //          this.radius = radius

        //}

        //get surface() {

          //              return Math.PI * Math.pow(this.radius, 2);

//}

//move(xOffset, yOffset) {
//
//j'ai été (avec l'accord d'Adrien) voir son repo et j'ai donc essayé de comprendre ce qu'il a fait.
//
//Voici donc ce que j'ai compris.
//
//Il fallait d'abord créer une classe nommée Circle dans laquelle on créer un constructor pour y mettre les propriétés 'this...'.
//Ensuite il fallait un get pour return la surface du cercle dans lequel on utilise:
//Math.PI pour calculer le périmètre d'un cercle à partir du rayon passé en argument.
//Math.pow pour renvoyer un nombre à une certaine puissance, c'est-à-dire base exposant.
//
//donc le get surface() il fallait qu'il retourne Pi x le rayon au carré.
//ensuite il fallait créer la méthode move:
//
//donc le calcul est de prendre la propriété adaptée par exemple dans ce cas-ci this.xPos et d'y ajouter la valeur de XOffset. et de répéter l'action à chaque fois (uniquement dans ce cas-ci à la propriété xPos et yPos qui représentent la position de ces axes sur l'écran.).
//
//le console.log développe la position xPos, yPos, le radius et la surface du cercle.
//
//la méthode print créé ici et combinée avec la fonction circle créée en dessous montre les différents résultats de mouvement selon les données possiblement encodées.

