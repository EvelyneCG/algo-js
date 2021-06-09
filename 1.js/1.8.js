const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name please? Still 5 questions to answer.");
let fruit = readlineSync.question("What's your favourite fruit please? Still 4 questions to answer.");
let size = readlineSync.question("Choose between big or small please. Still 3 questions to answer.");
let country = readlineSync.question("Choose a country please. Still 2 questions to answer.");
let color = readlineSync.question("What's your favourite color please? Still 1 questions to answer.");
let age = readlineSync.question("How old are you please? It was the last question.");

console.log("Once upon a time, there was a little " + fruit + " named " + color + " who had a " + size + " infection called " + name + " wich was " + age + " centimeter width. And the ONLY CURE was to kiss a frog named " + country + "."); 
