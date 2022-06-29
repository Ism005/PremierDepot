"use stricte";

function menu(){
	
	let lettre=prompt(`Pour calculer la factorielle tapez 'f', pour calculer la somme 's' et pour sortir 'x'`);
	switch(lettre){
		case 'f': 
			console.log(calculFactorielle());
		break;
		case 's': 
			console.log(calculSomme());
		break;
		case 'x':
			console.log('exit');
		break;
		default:
			console.log('saisi incorrecte');
	}
}

function calculFactorielle(){
	const nombreFact = Number(prompt('Saisir le nombre pour la factorielle'));

let resultFact = 1;

for (let i = nombreFact; i > 0; i--) {
  
  resultFact = resultFact * i;
}
return resultFact;

}

function calculSomme(){
	let somme=0;
	const chiffreSomme = Number(prompt('Saisir un chiffre pour calculer la somme'));

	for (let j = 0 ; j <=chiffreSomme; j++) {
  
 	 somme=chiffreSomme+j;
}
	return somme;
}


let continuer;
do{
	menu();
	continuer=prompt(`voulez-vous continuer y ou n?`);

}while(continuer!=='n');





