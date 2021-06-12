// Alors j'ai commencé par chercher c'est qu'est une factorielle et ce qu'est une fonction récursive. pour la fonction récursive j'ai trouvé dans le livre Javascript pour les nuls ce en quoi celà consiste, elle agit un peu comme une boucle. 
// Pour la factorielle j'ai effectué une simple recherche google.
// Maintenant le tout est de mixer les 2.
// Sur ce site j'ai trouvé la fonction adéquate je l'ai juste adaptée pour que l'on puisse calculer la factorielle d'un chiffre demandé par l'utilisateur.

const readlineSync = require("readline-sync");

let a = new Number(readlineSync.question("Choose a positive integer number please. "));


function factorial(a)
{

  if (a === 0)
  {
     return 1;
  }

  return a * factorial(a-1);
}
console.log(factorial(a));
