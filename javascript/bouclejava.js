'use strict';

//Boucle for || for  loop
for(let i = 0; i <10; i++){
	console.log(`instruction numéro ${i}`);
}

const chiffre = Number(prompt(`Saisir un chiffre`))
for(let i = 10 ; i>0 ; i-- ){

	console.log(`${i} x ${chiffre}=${chiffre*i}`);
	console.log(`5* ${i} =  ${5*i}`);
}

const nombre = Number(prompt('Saisir une factorielle'));

let resultFact = 1;

for (let i = 1; i <=nombre; i++){

	resultFact = resultFact * i;
}

console.log(`Pour le chiffre saisi = ${nombre}: ${resultFact}`);


const tableau = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(tableau);

tableau.push(1);
tableau.push(2);
tableau.push(3);

console.log(tableau);

tableau.length //Taille du tableau
