import { Component, OnInit } from '@angular/core';
import { PRODUITS } from "./donnee-produits";
import { Produit } from './Produit';

@Component({
  selector: 'app-root',
  templateUrl :'app.component.html'
})
export class Appcomponent implements OnInit {
  nom: string;
  ngOnInit(): void {
    this.nom = 'Mukwala';
  console.log(`Bonjour${this.nom}`);
  this.produits = PRODUITS;
  console.table(this.produits);
  }
  produits: Produit[];

 
 
}

