import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './artista/artista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoDeArtistasComponent } from './listado-de-artistas/listado-de-artistas.component';

const routes: Routes = [

  { path: '', component: ListadoDeArtistasComponent  },
  { path: 'formulario', component: FormularioComponent  },
  { path: 'artista/:id', component: ArtistaComponent  }, //autor/1
  { path: 'artista', component: ArtistaComponent  } //autor?id=1
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
