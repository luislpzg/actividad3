import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeArtistasComponent } from './listado-de-artistas/listado-de-artistas.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ArtistaModule } from './artista/artista.module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeArtistasComponent,
    NavBarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ArtistaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
