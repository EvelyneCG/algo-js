const readlineSync = require("readline-sync");

let array = [];
let n = new Number(readlineSync.question("Choose a number between 1 and 10"));

function rand10() {
return Math.round(Math.random() * 10);
  };

function multiRand(n) {
	for (i = 0; i < n; i++) {
		array.push(rand10());}
	return array}

console.log(multiRand(n));

// reprise de la fonction de l'exo précédent et ajout d'une boucle et pusher la réponse de la fonction précédente autant de fois que nécessaire.
