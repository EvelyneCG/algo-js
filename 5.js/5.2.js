const readlineSync = require("readline-sync");

function askTvSerie() {
    let serie = {
        actors: []
    }

    serie.name = readlineSync.question("Name of the serie: ");
    serie.year = new Number(readlineSync.question("Year of release : "));

    let nActors = new Number(readlineSync.question("How many actors do you have in there?: "));
    for (let i = 1; i <= nActors; i++) {
        serie.actors.push(readlineSync.question("Actor number "+i+" of the serie : "));
    }

    return serie;
}

function randomizeCast(tvSerie) {
return tvSerie.actors.sort(() => Math.random() - 0.5);

}

let askSerie = askTvSerie(); 
let shuffle =  randomizeCast(askSerie);

	console.log("If we sort them at random it will give you this cast for a new serie: " , shuffle);
	
