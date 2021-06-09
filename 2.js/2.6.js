const readlineSync = require("readline-sync");

let day = 0;
while (day <= 7) {
    let day = new Number(readlineSync.question("What day is it today ? "));
    if (day == 1) {
        console.log("1 so it's Monday");
    } else if (day == 2) {
        console.log("2 so it's Tuesday");
    } else if (day == 3) {
        console.log ("3 so it's Wednesday");
    } else if (day == 4) {
        console.log("4 so it's Thursday");
    } else if (day == 5) {
        console.log("5 so it's Friday");
    } else if (day == 6) {
        console.log("6 so it's Saturday");
    } else if (day == 7) {
        console.log("7 so it's Sunday")
    }
    else {
        break
    }
}
