const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("Choose a number please."));
let max = new Number(readlineSync.question("Choose a number again please."));
let current = new Number(readlineSync.question("Choose a last number please."));

if (min > max) {
	console.log("Sorry but your first number must be greater than the second one, you did not get the exercise. Please retry.");
} else if ((current > min) || (current > max)) {
	console.log("You choose " + current);
} else {
	console.log("Thanks for your attention but it's over.");
}
