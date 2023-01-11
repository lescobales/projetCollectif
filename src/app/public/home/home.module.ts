import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProduitComponent } from './produit/produit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PresentationComponent,
    ProduitComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
