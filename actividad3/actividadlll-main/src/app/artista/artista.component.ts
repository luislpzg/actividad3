import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Artista } from '../models/artista.interface';
import { ArtistaService } from '../services/artista-service.service';
  

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {


  id = 0;
  artista!:Artista;

  //http://localhost:4000/autor/1

  paramsSubscription: Subscription = new Subscription;
  
  constructor(private route: ActivatedRoute,private servicio:ArtistaService) { }
  
  
  ngOnInit(): void {

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });


    this.artista=this.servicio.ObtenerUno(this.id);

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}