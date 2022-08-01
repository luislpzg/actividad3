import { Component, OnInit } from '@angular/core';
import { Artista } from '../models/artista.interface';
import { ArtistaService } from '../services/artista-service.service';

@Component({
  selector: 'app-listado-de-artistas',
  templateUrl: './listado-de-artistas.component.html',
  styleUrls: ['./listado-de-artistas.component.css']
})
export class ListadoDeArtistasComponent implements OnInit {

  titulo:string='Administración de artistas'
  
  artistas:Artista[]=[];


  constructor(private servicio:ArtistaService) { }

  ngOnInit(): void {

    this.artistas=this.servicio.ListadoArtistas();
  }

}
