import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicModule } from '../public/public.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    RouterModule
  ],
  exports: [
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
