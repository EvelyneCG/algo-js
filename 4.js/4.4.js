const readlineSync = require("readline-sync");

let arr = [];
let n = new Number(readlineSync.question("Choose a number between 1 and 10. "));

function rand10() {
return Math.floor(Math.random() * 10);
  };

function multiRand(n) {
        for (i = 0; i < n; i++) {
                arr.push(rand10());}
        return arr}

function average(arr) {
	return arr.reduce((a,b) => a + b, 0) / arr.length;}

function min(arr) {
	return Math.min(...arr);}

function max(arr) {
	return Math.max(...arr);}

console.log(multiRand(n) + " and the average of this array is " + average(arr) + ", th minimum element of this array is " + min(arr) + " and the maximum element is " + max(arr) + ".");

//Honnêtement j'aurai du remplir la doc au fur et à mesure de l'exo parce que j'en suis à 3 ou 4 jours après et je ne me rappelle plus ...
