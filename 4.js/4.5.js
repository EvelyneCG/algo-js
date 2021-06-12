const readlineSync = require("readline-sync");

let x1 = new Number(readlineSync.question("Give me a number as first point please. "))
let x2 = new Number(readlineSync.question("Now a second one please. "));
let y1 = new Number(readlineSync.question("An another one please. "));
let y2 = new Number(readlineSync.question("And no the last but not the least. "));




let a = [x1, y1];
let b = [x2, y2];
function calcDistance(a, b) {
let xab = Math.pow((b[0] - a[0]), 2);
let yab = Math.pow((b[1] - a[1]), 2);
return tot = Math.sqrt(xab + yab);
}
console.log(calcDistance(a, b));

// en cherchant comment calculer la distance entre 2 points, beaucoup de sites m'ont ramenés au théorème de pythagore. J'ai donc été chercher une vidéo pour me rappeler la technique de calcul de ce théorème (tout simple mais il faut encore s'en rappeler). Après avoir (ENFIN) visualisé le calcul grâce à cette vidéo et à Eli qui m'a expliqué comment visualiser l'exo j'ai pu appliquer la technique de calcul trouver sur ce site https://www.gladir.com/CODER/JAVASCRIPT/delta.htm.
// mais le calcul du carré ne s'effectuait pas donc sur ce site j'ai trouvé mon calcul manquant et comment l'appliquer. https://www.delftstack.com/fr/howto/javascript/javascript-square-a-number/#:~:text=de%20multiples%20fa%C3%A7ons.-,Utilisez%20la%20m%C3%A9thode%20Math.,()%20de%20la%20biblioth%C3%A8que%20Math%20.
