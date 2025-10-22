import type { __String } from "typescript";

export interface Persona {
    nombre:string; 
    apellido: string
}

export interface Producto{
    nombre: string;
    precio: number;
}

export interface Pais {
    pais: string;
    ciudad: string;
}
export interface Color {
    color:string;
}

export interface Libro{
    titulo:string;
    autor:string;
}
export interface Mascota {
    nombre:string;
    especie:string;
}