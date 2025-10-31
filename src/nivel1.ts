import type { Animal, Persona, Producto } from "../interfaces/interfaces.js";       
import type { Ciudad } from "../interfaces/interfaces.js";
import type { Color } from "../interfaces/interfaces.js";
import type { Libro } from "../interfaces/interfaces.js";
import type { Mascota } from "../interfaces/interfaces.js";
import type { Vehiculo } from '../interfaces/interfaces.js';
import type { Usuario } from '../interfaces/interfaces.js';
import type { Profesor } from "../interfaces/interfaces.js";
import type { Pais } from "../interfaces/interfaces.js";
import type { Computadora } from '../interfaces/interfaces.js';
import type { Cuenta } from '../interfaces/interfaces.js';


// Nivel 1 – Desestructuración básica

//1. Crea una función saludarPersona que reciba un objeto
//  con nombre y apellido y muestre un saludo completo.
const Persona: Persona = { nombre: "Carlos", apellido: "Barrantes" };
function saludarPersona(persona: Persona) {
    console.log(`Hola, ${persona.nombre} ${persona.apellido}`);
}
saludarPersona(Persona);

// 2. Declara un tipo Producto con nombre y precio. 
// Crea una función mostrarProducto que desestructure y muestre ambos.
const Producto: Producto = { nombre: "Laptop", precio: 1200 };
function mostrarProducto({nombre,precio}: Producto) {
    console.log(`Producto: ${nombre}, Precio: ${precio}`);
}
mostrarProducto(Producto);

// 3. Escribe una función mostrarCiudad que reciba { pais: string, ciudad: string } 
// y retorne un string "Ciudad, País".
const Ciudad: Ciudad = { pais: "Perú", ciudad: "Chepén" };
function mostrarCiudad({pais,ciudad}: Ciudad) { 
    console.log(`Ciudad: ${ciudad}, País: ${pais}`);
}
mostrarCiudad(Ciudad);

// 4. Crea una función mostrarColor que reciba un objeto { color: string }
//  y retorne "Tu color favorito es X".
const Color: Color = { color: "Rojo" };
function mostrarColor({color}: Color) {
    console.log(`Tu color favorito es: ${color}`);
}
mostrarColor(Color);

// 5. Define una función detallesLibro que reciba { titulo: string, autor: string } y
//  devuelva un string con formato "‘titulo’ por autor".
const Libro: Libro = { titulo: "1984", autor: "George Orwell" };
function detallesLibro({titulo,autor}: Libro) {
    console.log(`Titulo: ${titulo} por Autor: ${autor}`);
}
detallesLibro(Libro);

// 6. Crea una función mostrarMascota que reciba { nombre: string, especie: string } 
// y muestre un mensaje.
const Mascota: Mascota = { nombre: "Firulais", especie: "Perro" };
function mostrarMascota ({nombre,especie}: Mascota) {
    console.log(`Mascota: ${nombre}, Especie: ${especie}`);
}
mostrarMascota(Mascota);

// 7. Define un tipo Vehiculo con marca y modelo. 
// Crea una función mostrarVehiculo que los desestructure y retorne un mensaje.
const Vehiculo: Vehiculo = {marca: "Toyota", modelo: "Corolla"};
function mostrarVehiculo({marca,modelo}: Vehiculo){
    console.log(`Vehículo: ${marca}, Modelo: ${modelo}`);
}
mostrarVehiculo(Vehiculo);

// 8. Crea una función datosUsuario que reciba 
// { nombre: string, edad: number } y muestre los valores en consola.
const Usuario: Usuario = {nombre: "Ana", edad: 28};
function datosUsuario({nombre,edad}:Usuario){
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
datosUsuario(Usuario);

// 9. Crea una función mostrarProfesor que reciba { nombre: string, curso: string } 
// y retorne "El profesor X dicta el curso Y".
const Profesor: Profesor = {nombre:"Pepe",curso:"Computacion"}
function mostrarProfesor({nombre,curso}:Profesor){
    console.log(`El profesor ${nombre} dicta el curso: ${curso}`);
}
mostrarProfesor(Profesor);

// 10. Define una función mostrarPais que reciba 
// { nombre: string, capital: string } y retorne "La capital de X es Y".
const Pais: Pais = {nombre:"Argentina",capital:"Buenos Aires"};
function mostrarPais({nombre,capital}:Pais){
    console.log(`La capital de ${nombre} es ${capital}`);
}
mostrarPais(Pais);

// 11. Crea una función mostrarComputadora que reciba 
// { marca: string, procesador: string } y retorne una descripción.
const Computadora: Computadora = {marca:"Dell",procesador:"16GB RAM"};
function mostrarComputadora({marca,procesador}:Computadora){
    console.log(`Computadora Marca: ${marca}, Procesador: ${procesador}`);
}
mostrarComputadora(Computadora);

// 12. Define una función mostrarUsuarioDetallado con 
// { usuario: string, rol: string } y muestre "usuario (rol)".
const UsuarioDetallado: Usuario = {nombre: "Luis", rol: "admin"};
function mostrarUsuarioDetallado({nombre,rol}:Usuario){
    console.log(`${nombre}(${rol})`);
}
mostrarUsuarioDetallado(UsuarioDetallado);

// 13. Crea una función mostrarAnimal que reciba 
// { tipo: string, edad: number } y retorne "El tipo tiene edad años".
const animal: Animal = {tipo:"Perro",edad:5};
function mostrarAnimal({tipo,edad}:Animal){
    console.log(`El ${tipo} tiene ${edad} años.`);
}
mostrarAnimal(animal);

// 14. Define una función imprimirPersona con 
// { nombre: string, profesion: string } que retorne una frase.
const persona: Persona = { nombre: "Carlos", profesion: "Desarrollador" };
function imprimirPersona({nombre,profesion}:Persona){
    console.log(`Nombre: ${nombre}, Profesión: ${profesion}`);
}
imprimirPersona(persona);

// 15. Crea una función resumenCuenta que reciba 
// { titular: string, saldo: number } y retorne un resumen.
const cuenta: Cuenta = {titular:"María",saldo:1500};
function resumenCuenta({titular,saldo}:Cuenta){
    console.log(`Titular: ${titular}, Saldo: ${saldo}`);
}
resumenCuenta(cuenta);
