const readlineSync = require("readline-sync");

let i = 0

while (i <= 100) {
	console.log(i);
	i += 1;
	if (i % 2 == 0) {
	console.log(i / 2);
	} else {
		console.log(i * 3);
	}
}
