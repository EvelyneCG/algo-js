const readlineSync = require("readline-sync");

let one = new Number(readlineSync.question("Tell me a number with decimal part please? But i'll keep only the integer part after that."));
let two = new Number(readlineSync.question("If i divide 9 per 2 what's the result?"));

let total = Math.trunc(one) * two;

console.log("If i multiply your two results by keeping only the integer part of the first one then it will make " + total + ".");

