import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { ProduitComponent } from './home/produit/produit.component';
import { ContactComponent } from './home/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'entreprise', component: PresentationComponent},
  {path: 'produit', component: ProduitComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
