const readlineSync = require("readline-sync");

let answer = 0;

while (answer != 42) {
	answer =  new Number(readlineSync.question("What's your favourite number?"));
	if (answer != 42) {
		console.log("Are you sure ?");
	}
	else {
		console.log("That's great!");
	}
}

