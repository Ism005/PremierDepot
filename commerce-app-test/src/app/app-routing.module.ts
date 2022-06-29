import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { HomeComponent } from './home/home.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';

const routes: Routes = [
  {path: 'listeproduit', component: ListeProduitComponent},
  {path: 'produit/:id', component: DetailProduitComponent},
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: 'listeproduit', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
