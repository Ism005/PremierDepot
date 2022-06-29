'use strict';


const fruit1 = 'pomme';
const fruit2 = 'goyave';
const fruit3 = 'anananas';
const fruit4 = 'banane';
const fruit5 = 'kiwi';
const legume1 = 'poirreau';

const fruits = ['pomme', 'goyave', 'anananas', 'banane', 'kiwi'];
const legumes = ['poirreau'];


console.log(fruits, legumes);

console.log(`${fruits[1]} et ${legumes[0]}`);


const added = fruits.push('mangue'); //ajouter au début
legumes.unshift('tomate'); //ajouter à la fin

console.log(fruits);
console.log(legumes);


//retirer élément
fruits.pop(); // à la fin
fruits.shift(); // au début


const person = [
    'Oussama',
    'Informaticien',
    2008,
    ['football', 'podcast', 'basse']
];
console.log(`${person[0]} a commencé sa carrière en ${person[2] } et est passionné de ${person[3][0]} de ${person[3][1]} et de ${person[3][2]} `);



const personObject = {
	name : 'Jonathan',
	metier : 'formation',
	loisirs : ['musique', 'basket', 'StreetFighter'],
	debutDeCarriere : 1999,

};

console.log(personObject);

console.log(personObject.name);

console.log(personObject['name']);

const interestedIn =prompt('Selectionner une info qui vous interesse: \n\name \n\metier \n\loisirs \n\DebutdeCarriere')
//	if (personObject[interestedIn]){
//		console.log(personObject[interestedIn]);
//
//	}
//	else{
//		consle.log('information non disponible');
//	}

//Ajouter un attribut à mon objet
personObject.enMouvement = true;

console.log(personObject);

//Appel à une fonction stockée dans l'obect
consle.log(personObject.calcCar());

console.log(personObject2.calcCar());

