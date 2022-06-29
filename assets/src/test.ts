let personne : {
    
     nom : string;
    prenom : string;
    age : number;
    
}


personne = {
    
    nom :'Mukwala',
    prenom : 'Jo',
    age : 23,
}
 
console.log(personne);


let animal : {

    race : any;
    age : number;
    nom : string;

}

animal = {

    race : 5,
    age : 6,
    nom : 'Bobby',
}


console.log(animal);
console.log(animal.race);


let helloPrenom = (nom: string, prenom?: string) => {
    return `Bonjour ${nom} ${prenom}`;
    
}
console.log(helloPrenom(`Mukwala`));