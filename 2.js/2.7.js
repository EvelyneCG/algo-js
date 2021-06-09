const readlineSync = require("readline-sync");


let total = 0;
let n = new Number(readlineSync.question("What's your favourite number (tips: don't go to far ;)"));
for (let i = 0; i < n; i++){
	Num = new Number(readlineSync.question("Choose a number : "));
	total = (total + Num);
}
console.log(total);

