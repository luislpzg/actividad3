import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaComponent } from './artista.component';
import { CancionComponent } from '../cancion/cancion.component';


@NgModule({
  declarations: [
    ArtistaComponent,
    CancionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArtistaModule { }
