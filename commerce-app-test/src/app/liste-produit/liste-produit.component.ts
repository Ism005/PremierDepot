import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUITS } from '../donnee-produits';
import { Produit } from '../Produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: 'liste-produit.component.html'

})
export class ListeProduitComponent implements OnInit {

  
  constructor(private router: Router) { }

  produits: Produit[];

  ngOnInit(): void {

    this.produits = PRODUITS;
    console.table(this.produits);
  }

  goToProduit(produit: Produit){
    this.router.navigate(['produit/', produit.id]);
  }


}
