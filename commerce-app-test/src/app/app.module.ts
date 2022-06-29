import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Appcomponent } from './app.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Appcomponent,
    ListeProduitComponent,
    DetailProduitComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Appcomponent]
})
export class AppModule { }
