const readlineSync = require("readline-sync");

let one = new Number(readlineSync.question("Give me a integer number please?"));
let two = new Number(readlineSync.question("Give me another integer number please?"));

console.log("The rest of the integer division of those two numbers is " + (one % two));
