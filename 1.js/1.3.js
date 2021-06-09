const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What's your firstname please?");
console.log("Hello " + firstName);
