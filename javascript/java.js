console.log(100);
console.log('text');

let firstVar = 2;
let secondVar = 3;

console.log(firstVar+secondVar);

let paysPrefere = 'Congo'
let villePrefere = 'Kinshasa'
let population =  1700000

const codePostale = 91150;


console.log(paysPrefere);
console.log(villePrefere);
console.log(population);
console.log(codePostale);

let firstPerson ='Henry';
let firstPersonLN = 'Bernard';
let secondPerson = 'Sarah';
let secondPersonLN = 'Michel';



let fullName = firstPerson+' '+firstPersonLN;
let secondFullname = secondPerson+' '+secondPersonLN;


console.log(fullName);
console.log(secondFullname);


const now = 2022;
let ageFirstPerson = now - 2000;
let ageSecondPerson = now - 1999;

console.log(ageFirstPerson, ageSecondPerson);

let varTmp = ageFirstPerson > ageSecondPerson;
console.log(ageFirstPerson>ageSecondPerson);

console.log(secondFullname  +' est âgée de '+  ageSecondPerson +' et '+ fullName +' est âgé de '+ ageFirstPerson + '? ' + ' => '  + varTmp + '!!!');

console.log()

let x = 10 + 5; //15
x += 13;

let presentation = 'Je m\appelle' + firstPerson + ' ' + firstPersonLN + ', et j\'ai ' + ageFirstPerson;



presentation = `Je m'appelle ${firstPerson} ${firstPersonLN} et j'ai ${ageFirstPerson}, et je sais faire 5+5`;

console.log(presentation);

document.write(presentation);

if({ageFirstPerson>ageSecondPerson});{
	console.log(`${firstPerson} est plus jeune que ${secondPerson}`);
} else {
	console.log(`${secondPerson} est plus jeune que ${firstPerson}`);
}