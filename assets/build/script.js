import { Personne } from "./personne.js";
const form = document.querySelector('form');
console.log(form);
const type = document.getElementById('genre');
console.log(type);
const nom = document.getElementById('nom');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault;
    alert(type.value + nom.value);
    document.body.innerHTML = type.value + " " + nom.value;
});
let Jonathan = new Personne('Mukwala', 'Jonathan', 23);
console.log(Jonathan);
