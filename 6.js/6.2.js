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

