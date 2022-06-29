"use strict";
exports.__esModule = true;
var personne_js_1 = require("./personne.js");
var form = document.querySelector('form');
console.log(form);
var type = document.getElementById('genre');
console.log(type);
var nom = document.getElementById('nom');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault;
    alert(type.value + nom.value);
    document.body.innerHTML = type.value + " " + nom.value;
});
var Jonathan = new personne_js_1.Personne('Mukwala', 'Jonathan', 23);
console.log(Jonathan);
