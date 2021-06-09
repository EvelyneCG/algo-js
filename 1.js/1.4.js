const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name please?");
let firstName = readlineSync.question("What's your firstName please?");
let city = readlineSync.question("Where do you live please ?");

console.log("Your name is " + firstName + " " + name + " and you live in " + city + ".");
