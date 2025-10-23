export interface Persona {
    nombre:string; 
    apellido?: string;
    profesion?:string;
}

export interface Producto{
    nombre: string;
    precio: number;
}

export interface Ciudad {
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

export interface Vehiculo{
    marca:string;
    modelo:string;
}

export interface Usuario{
    nombre:string;
    edad?:number;
    rol?:string;
}
export interface Profesor{
    nombre:string;
    curso:string;
}
export interface Pais{
    nombre:string;
    capital:string;
}
export interface Computadora{
    marca:string;
    procesador:string;
}

export interface Animal{
    tipo:string;
    edad:number;
}

export interface Cuenta{
    titular:string;
    saldo:number;
}