// Nivel 1 – Desestructuración básica
//1. Crea una función saludarPersona que reciba un objeto
//  con nombre y apellido y muestre un saludo completo.
const Persona = { nombre: "Carlos", apellido: "Barrantes" };
function saludarPersona(persona) {
    console.log(`Hola, ${persona.nombre} ${persona.apellido}`);
}
saludarPersona(Persona);
// 2. Declara un tipo Producto con nombre y precio. 
// Crea una función mostrarProducto que desestructure y muestre ambos.
const Producto = { nombre: "Laptop", precio: 1200 };
function mostrarProducto({ nombre, precio }) {
    console.log(`Producto: ${nombre}, Precio: ${precio}`);
}
mostrarProducto(Producto);
// 3. Escribe una función mostrarCiudad que reciba { pais: string, ciudad: string } 
// y retorne un string "Ciudad, País".
const Ciudad = { pais: "Perú", ciudad: "Chepén" };
function mostrarCiudad({ pais, ciudad }) {
    console.log(`Ciudad: ${ciudad}, País: ${pais}`);
}
mostrarCiudad(Ciudad);
// 4. Crea una función mostrarColor que reciba un objeto { color: string }
//  y retorne "Tu color favorito es X".
const Color = { color: "Rojo" };
function mostrarColor({ color }) {
    console.log(`Tu color favorito es: ${color}`);
}
mostrarColor(Color);
// 5. Define una función detallesLibro que reciba { titulo: string, autor: string } y
//  devuelva un string con formato "‘titulo’ por autor".
const Libro = { titulo: "1984", autor: "George Orwell" };
function detallesLibro({ titulo, autor }) {
    console.log(`Titulo: ${titulo} por Autor: ${autor}`);
}
detallesLibro(Libro);
// 6. Crea una función mostrarMascota que reciba { nombre: string, especie: string } 
// y muestre un mensaje.
const Mascota = { nombre: "Firulais", especie: "Perro" };
function mostrarMascota({ nombre, especie }) {
    console.log(`Mascota: ${nombre}, Especie: ${especie}`);
}
mostrarMascota(Mascota);
// 7. Define un tipo Vehiculo con marca y modelo. 
// Crea una función mostrarVehiculo que los desestructure y retorne un mensaje.
const Vehiculo = { marca: "Toyota", modelo: "Corolla" };
function mostrarVehiculo({ marca, modelo }) {
    console.log(`Vehículo: ${marca}, Modelo: ${modelo}`);
}
mostrarVehiculo(Vehiculo);
// 8. Crea una función datosUsuario que reciba 
// { nombre: string, edad: number } y muestre los valores en consola.
const Usuario = { nombre: "Ana", edad: 28 };
function datosUsuario({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
datosUsuario(Usuario);
// 9. Crea una función mostrarProfesor que reciba { nombre: string, curso: string } 
// y retorne "El profesor X dicta el curso Y".
const Profesor = { nombre: "Pepe", curso: "Computacion" };
function mostrarProfesor({ nombre, curso }) {
    console.log(`El profesor ${nombre} dicta el curso: ${curso}`);
}
mostrarProfesor(Profesor);
// 10. Define una función mostrarPais que reciba 
// { nombre: string, capital: string } y retorne "La capital de X es Y".
const Pais = { nombre: "Argentina", capital: "Buenos Aires" };
function mostrarPais({ nombre, capital }) {
    console.log(`La capital de ${nombre} es ${capital}`);
}
mostrarPais(Pais);
// 11. Crea una función mostrarComputadora que reciba 
// { marca: string, procesador: string } y retorne una descripción.
const Computadora = { marca: "Dell", procesador: "16GB RAM" };
function mostrarComputadora({ marca, procesador }) {
    console.log(`Computadora Marca: ${marca}, Procesador: ${procesador}`);
}
mostrarComputadora(Computadora);
// 12. Define una función mostrarUsuarioDetallado con 
// { usuario: string, rol: string } y muestre "usuario (rol)".
const UsuarioDetallado = { nombre: "Luis", rol: "admin" };
function mostrarUsuarioDetallado({ nombre, rol }) {
    console.log(`${nombre}(${rol})`);
}
mostrarUsuarioDetallado(UsuarioDetallado);
// 13. Crea una función mostrarAnimal que reciba 
// { tipo: string, edad: number } y retorne "El tipo tiene edad años".
const animal = { tipo: "Perro", edad: 5 };
function mostrarAnimal({ tipo, edad }) {
    console.log(`El ${tipo} tiene ${edad} años.`);
}
mostrarAnimal(animal);
// 14. Define una función imprimirPersona con 
// { nombre: string, profesion: string } que retorne una frase.
const persona = { nombre: "Carlos", profesion: "Desarrollador" };
function imprimirPersona({ nombre, profesion }) {
    console.log(`Nombre: ${nombre}, Profesión: ${profesion}`);
}
imprimirPersona(persona);
// 15. Crea una función resumenCuenta que reciba 
// { titular: string, saldo: number } y retorne un resumen.
const cuenta = { titular: "María", saldo: 1500 };
function resumenCuenta({ titular, saldo }) {
    console.log(`Titular: ${titular}, Saldo: ${saldo}`);
}
resumenCuenta(cuenta);
export {};
