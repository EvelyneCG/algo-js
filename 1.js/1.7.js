const readlineSync = require("readline-sync");

let shoesize = new Number(readlineSync.question("What's your shoe size please?"));
let birthyear = new Number(readlineSync.question("What's your birth year please ?"));

console.log("I'm gonna muliply your shoe size by 2 then add 5 plus multiply it by 50 then i'll subtract your birth year and finally add 1766 and the result is " + (((((shoesize * 2) + 5) * 50) - birthyear) + 1766) + ".");
