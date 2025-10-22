import type { Persona, Producto } from "../interfaces/interfaces.js";
import type { Pais } from "../interfaces/interfaces.js";
import type { Color } from "../interfaces/interfaces.js";
import type { Libro } from "../interfaces/interfaces.js";
import type { Mascota } from "../interfaces/interfaces.js";

//1. Crea una función saludarPersona que reciba un objeto
//  con nombre y apellido y muestre un saludo completo.
const Persona: Persona = { nombre: "Carlos", apellido: "Barrantes" };
function saludarPersona(persona: Persona) {
    console.log(`Hola, ${persona.nombre} ${persona.apellido}`);
}

// 2. Declara un tipo Producto con nombre y precio. 
// Crea una función mostrarProducto que desestructure y muestre ambos.
const Producto: Producto = { nombre: "Laptop", precio: 1200 };
function mostrarProducto({nombre,precio}: Producto) {
    console.log(`Producto: ${nombre}, Precio: ${precio}`);
}

// 3. Escribe una función mostrarCiudad que reciba { pais: string, ciudad: string } 
// y retorne un string "Ciudad, País".
const Pais: Pais = { pais: "Perú", ciudad: "Chepén" };
function mostrarCiudad({pais,ciudad}: Pais) { 
    console.log(`Ciudad: ${ciudad}, País: ${pais}`);
}

// 4. Crea una función mostrarColor que reciba un objeto { color: string }
//  y retorne "Tu color favorito es X".
const Color: Color = { color: "Rojo" };
function mostrarColor({color}: Color) {
    console.log(`Tu color favorito es: ${color}`);
}

// 5. Define una función detallesLibro que reciba { titulo: string, autor: string } y
//  devuelva un string con formato "‘titulo’ por autor".
const Libro: Libro = { titulo: "1984", autor: "George Orwell" };
function detallesLibro({titulo,autor}: Libro) {
    console.log(`Titulo: ${titulo} por Autor: ${autor}`);
}

// 6. Crea una función mostrarMascota que reciba { nombre: string, especie: string } 
// y muestre un mensaje.
const Mascota: Mascota = { nombre: "Firulais", especie: "Perro" };
function mostrarMascota ({nombre,especie}: Mascota) {
    console.log(`Mascota: ${nombre}, Especie: ${especie}`);
}




