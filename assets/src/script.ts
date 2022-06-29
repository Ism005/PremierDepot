import { Personne } from "./personne.js";

const form = document.querySelector('form') as HTMLFormElement;
console.log(form);
const type = document.getElementById('genre') as HTMLInputElement;
console.log(type);

const nom = document.getElementById('nom') as  HTMLInputElement;


form?.addEventListener('submit', (e: Event) => {
    e.preventDefault;
    alert(type.value + nom.value);
    document.body.innerHTML = type.value + " "+ nom.value;
})

let Jonathan = new Personne('Mukwala','Jonathan',23);
console.log(Jonathan);