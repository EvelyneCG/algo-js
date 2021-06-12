const readlineSync = require("readline-sync");

let array = [];
let n = new Number(readlineSync.question("Choose a number between 1 and 10"));

function rand10() {
return Math.floor(Math.random() * 10);
  };

function multiRand(n) {
	for (i = 0; i < n; i++) {
		array.push(rand10());}
	return array}

console.log(multiRand(n));

