const readlineSync = require("readline-sync");

function askTvSerie() {
    let serie = {
        actors: []
    }

    serie.name = readlineSync.question("Name of the serie: ")
    serie.year = new Number(readlineSync.question("Year of release : "))

    let nActors = new Number(readlineSync.question("How many actors do you have in there?: "))
    for (let i = 1; i <= nActors; i++) {
        serie.actors.push(readlineSync.question("Actor number "+i+" of the serie : "))
    }

    return serie
}

console.log(askTvSerie())
