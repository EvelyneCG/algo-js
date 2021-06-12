const readlineSync = require("readline-sync");

let width = readlineSync.question("Tell me a integer number please.");
let height = readlineSync.question("Tell me a another integer number please.");


function calcSurface(width, height) {
	return width * height;

}

console.log(calcSurface(width, height));

// J'ai trouver le code de base sur https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function et ensuite j'ai réfléchi au fait que si je mettais les mesures moi-même je ne pourrai pas demander à l'utilisateur de choisir et ainsi réaliser l'exo. Donc j'ai cumulé les différentes théories vu ces 2 derniers jours pour appeler ma fonction et faire fonctionner mon algorithme.
