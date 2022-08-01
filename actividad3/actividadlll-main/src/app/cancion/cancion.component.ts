import { Component, Input, OnInit } from '@angular/core';
import { Cancion } from '../models/cancion.interface';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  foto='https://www.adslzone.net/app/uploads-adslzone.net/2022/01/reconocer-canciones-que-suenan-con-estas-apps.jpg?x=480&y=375&quality=40';
  
  @Input() cancion!:Cancion;
  
  constructor() { }

  ngOnInit(): void {
  }

}
