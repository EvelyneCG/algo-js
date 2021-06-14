const readlineSync = require("readline-sync");

class Rectangle {
	constructor(topLeftXPos, topLeftYPos, width, length){
		this.x = topLeftXPos;
		this.y = topLeftYPos;
		this.width = width;
		this.length = length;
	}

	collides(otherRectangle) {
	if (this.x < otherRectangle.x + otherRectangle.width &&
   this.x + this.width > otherRectangle.x &&
   this.y < otherRectangle.y + otherRectangle.length &&
   this.length + this.y > otherRectangle.y) {
	return true;
	} else {
		return false;
	}

	}
}

 let rect1 = new Rectangle(20, 25, 45, 70);
        let rect2 = new Rectangle(100, 200, 2, 3);
let rect3 = new Rectangle(500, 500, 50, 60);
let rect4 = new Rectangle(500, 500, 50, 60);




console.log(rect1.collides(rect2));
console.log(rect3.collides(rect4));


// J'ai commencé par lire l'énoncé et appliquer les étapes au fur et à mesure. en me référant à une vidéo youtube https://www.youtube.com/watch?v=VVARVNTDirM&t=328s et à un forum https://stackoverflow.com/questions/2440377/javascript-collision-detection. Ensuite après quelques essais infructueux c'est un travail d'équipe avec Marianne, Eli et Adrien qui a permis de finaliser le tout (en plus d'un craquage au niveau du true et false qui ont failli s'appeler respectivement "pas de chocapic" et "AH SI! Aujourd'hui il y a des chocapic".
