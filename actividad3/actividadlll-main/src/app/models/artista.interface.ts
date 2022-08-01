import { Cancion } from "./cancion.interface";

export interface Artista{

    id:number,
    nombre:string,
    lugar_nacimiento:string,
    genero:string,
    year:number,
    foto:string,
    canciones:Cancion[]



}