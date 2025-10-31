import type { Alumno, Cliente, Clima, Cuenta, Empleado, Evento, Libro, Pedido, Pelicula, Producto, ProductoAlias, Servidor, Usuario, UsuarioCompacto } from "../interfaces/interfaces.js";
import type { Curso} from "../interfaces/interfaces.js";

// Nivel 2 – Desestructuración con alias y valores por defecto

// Crea una función mostrarEmpleado que use alias ({ nombre: n, puesto: p }) 
// para mostrar "Empleado n trabaja como p".
const empleado: Empleado = {nombre: "Ana", puesto: "Ingeniera"};
function mostrarEmpleado({nombre:n, puesto:p}: Empleado){
    console.log(`Empleado ${n} trabaja como ${p}`);
}
mostrarEmpleado(empleado);

// Define mostrarAlumno que reciba { nombre, curso = "No asignado" } y muestre ambos valores.
const alumno:Alumno = { nombre: "Luis" };
function mostrarAlumno({ nombre, curso = "No asignado" }:Alumno) {
  console.log(`Alumno: ${nombre}, Curso: ${curso}`);
}
mostrarAlumno(alumno);

// Crea mostrarTemperatura que reciba { ciudad, grados = 25 } y retorne "En ciudad hay grados°C".
const clima:Clima = {ciudad: "Perú"};
function mostrarTemperatura({ciudad,grados=25}:Clima){
    console.log(`Ciudad: ${ciudad}, grados: ${grados}°C`);
}
mostrarTemperatura(clima);

// Define resumenCliente con alias para nombre y categoria, mostrando 
// "Cliente: n (Categoria: c)".
const cliente:Cliente = { nombre: "Empresa XYZ", categoria: "Premium" };
function resumenCliente({nombre:n, categoria:c}:Cliente){
    console.log(`Cliente: ${n} (Categoria: ${c})`);
}
resumenCliente(cliente);

// Escribe detalleProducto con un valor por defecto para stock = 0.
const producto: Producto = {nombre: "Smartphone"};
function detalleProducto({nombre,stock=0}: Producto){
    console.log(`Producto: ${nombre}, Stock: ${stock}`);
}
detalleProducto(producto);

// Crea mostrarUsuarioConAlias que renombre nombre a n y edad a e 
// dentro de la función.
const usuario: Usuario = {nombre: "Miguel", edad: 30};
function mostrarUsuarioConAlias({nombre:n,edad:e}:Usuario){
    console.log(`Usuario: ${n}, Edad: ${e}`);
}
mostrarUsuarioConAlias(usuario);

// Define informacionServidor que use { ip: direccion, puerto = 8080 }.
const servidor: Servidor = { ip: "192.168.1.1" };
function informacionServidor({ ip: direccion, puerto = 8080 }: Servidor) {
    console.log(`Servidor: ${direccion}, Puerto: ${puerto}`);
}
informacionServidor(servidor);

// Crea mostrarCurso que use alias y valor por defecto para nivel = "básico".
const curso: Curso = { nombre: "TypeScript" };
function mostrarCurso ({nombre:n, nivel="básico"}: Curso){
    console.log(`Curso: ${n}, Nivel: ${nivel}`);
}
mostrarCurso(curso);

// Escribe resumenPedido con { id: identificador, estado = "pendiente" }.
const pedido: Pedido = {id:1};
function resumenPedido({id:identificador, estado="pendiente"}:Pedido){
    console.log(`Pedido ID: ${identificador}, Estado: ${estado}`);
}
resumenPedido(pedido);

// Define imprimirLibro con { titulo: t, paginas = 100 } y retorna "El libro t tiene p páginas".
const libro : Libro= {titulo: "El Quijote"};
function imprimirLibro({titulo:t, paginas=100}:Libro){
    console.log(`El libro ${t} tiene ${paginas} páginas`);
}
imprimirLibro(libro);

// Crea mostrarEvento que use alias en { nombre: n, fecha: f }.
const evento: Evento = {nombre: "Concierto", fecha: "2024-12-01"};
function mostrarEvento({nombre:n,fecha:f}:Evento){
    console.log(`Evento: ${n}, Fecha: ${f}`);
}
mostrarEvento(evento);

// Define mostrarCuenta con { numero, saldo = 0 } y muestra "Cuenta numero tiene saldo soles".
const cuenta: Cuenta = {numero:123456};
function mostrarCuenta ({numero,saldo=0}:Cuenta){
    console.log(`Cuenta ${numero} tiene ${saldo} soles`);
}
mostrarCuenta(cuenta);

// Crea mostrarUsuarioCompacto con { user: nombreUsuario, activo = false }.
const usuarioCompacto : UsuarioCompacto = {user: "Carlos"};
function mostrarUsuarioCompacto({user:nombreUsuario, activo=false}:UsuarioCompacto){
    console.log(`Usuario: ${nombreUsuario}, Activo: ${activo}`);
}
mostrarUsuarioCompacto(usuarioCompacto);

// Define mostrarProductoAlias que use alias para nombre y precio.
const productoAlias: ProductoAlias = {nombre: "Tablet", precio: 300};
function mostrarProductoAlias({nombre:n, precio:p}:ProductoAlias){
    console.log(`Producto: ${n}, Precio: ${p}`);
}
mostrarProductoAlias(productoAlias);

// Escribe mostrarPelicula que reciba { titulo, genero = "Desconocido" } y retorne "titulo - genero".
const pelicula: Pelicula = {titulo: "Aro"};
function mostrarPelicula({titulo, genero="Desconocido"}:Pelicula){
    console.log(`Pelicula: ${titulo} - Genero: ${genero}`);
}
mostrarPelicula(pelicula);
