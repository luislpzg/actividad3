import { Injectable } from '@angular/core';
import { Artista } from '../models/artista.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
//***********
private artistas:Artista[]=[
  {
    id:1,
    nombre:'Daddy Yanke',
    lugar_nacimiento:'Puerto Rico',
    genero:'Reggaeton',
    year:1977,
    foto:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6I67D3VFBJBHDNGZOGHCRWD5RA.jpg',
    canciones:[
      {id:1,nombre:'Gasolina',album:'Los extraterrestres',year:2010},
      {id:2,nombre:'Yo voy',album:'Legendaddy',year:2004},
      {id:3,nombre:'Bombon',album:'Epico',year:2022},
      {id:4,nombre:'Agarrala',album:'Prestige',year:2008},
      {id:5,nombre:'La Despedida',album:'Mundial',year:2001}
    ]
},
{
  id:2,
  nombre:'Romeo Santos',
  lugar_nacimiento:'Estados Unidos',
  genero:'Bachata',
  year:1981,
  foto:'https://cdn.smehost.net/sonymusiclatincom-uslatinprod/wp-content/uploads/2013/11/romeiosantos.png',
  canciones:[
    {id:1,nombre:'La  boda',album:'Golden',year:2006}
  ]
},
{
  id:3,
  nombre:'Vicente Fernandéz',
  lugar_nacimiento:'Mexico',
  genero:'Ranchero',
  year:1960,
  foto:'https://i.ytimg.com/vi/2ywHnFq1YqA/maxresdefault.jpg',
  canciones:[
    {id:1,nombre:'Mujeres Divinas',album:'La penca',year:2011}
  ]
},
{
  id:3,
  nombre:'Marco Antonio Solis',
  lugar_nacimiento:'Mexico',
  genero:'Baladas',
  year:1959,
  foto:'https://www.biografiasyvidas.com/biografia/d/fotos/dalton_roque.jpg',
  canciones:[
    {id:1,nombre:'Inventame',album:'Trozos de mi alma',year:2008}
  ]
},
{
  id:4,
  nombre:'Eminem',
  lugar_nacimiento:'Estados Unidos',
  genero:'Rap',
  year:1972,
  foto:'https://www.buscabiografias.com/img/people/Eminem.jpg',
  canciones:[
    {id:1,nombre:'WithoutMe',album:'Eminem Show',year:1999}
  ]
},
{
  id:5,
  nombre:'Zoé',
  lugar_nacimiento:'Mexico',
  genero:'Baladas',
  year:1960,
  foto:'https://i.ytimg.com/vi/HJqlA_HTEU8/maxresdefault.jpg',
  canciones:[
    {id:1,nombre:'Soñe',album:'Amar te duele',year:1995}
  ]
},
{
  id:6,
  nombre:'Bon Jovy',
  lugar_nacimiento:'Estados Unidos',
  genero:'Rock',
  year:1960,
  foto:'https://i.ytimg.com/vi/9BMwcO6_hyA/maxresdefault.jpg',
  canciones:[
    {id:1,nombre:'Always',album:'Cross Road',year:1950}
  ]
},
{
  id:7,
  nombre:'Bob Marley',
  lugar_nacimiento:'Jamaica',
  genero:'reggae',
  year:1945,
  foto:'https://t2.uc.ltmcdn.com/es/posts/4/2/2/como_murio_bob_marley_43224_600.jpg',
  canciones:[
    {id:1,nombre:'Jamming',album:'Exodus',year:1999}
  ]
}
];

//***********
  constructor() { }

  ListadoArtistas():Artista[]{
    return this.artistas;
  }

  InsertarArtista(artista:Artista){
    this.artistas.push(artista);
  }

  ObtenerUno(id:number):Artista{
    
    return <Artista>this.artistas.find(item=>item.id===id)

  }

}
