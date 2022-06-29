import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUITS } from '../donnee-produits';
import { Produit } from '../Produit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

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
