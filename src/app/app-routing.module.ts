import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListesdescoursComponent } from './listesdescours/listesdescours.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AproposComponent } from './apropos/apropos.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  { path:'',title:"Acceuil" ,component: HomeComponent },
  { path:'Connexion',title:"Connexion" ,component: ConnexionComponent },
  {path:'List',title:"List",component:ListesdescoursComponent},
  {path:'ajout',title:"Ajout",component:AjoutComponent},
  {path:'apropos',title:"apropos",component:AproposComponent},
  {path:'inscription',title:"inscription",component:InscriptionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  BrowserModule,

  ],
  exports: [RouterModule],
 
})
export class AppRoutingModule {
 }
