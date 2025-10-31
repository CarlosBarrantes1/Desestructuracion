// Nivel 3 – Desestructuración anidada y tipos compuestos
// Crea mostrarDireccionCompleta que reciba { nombre, direccion: { ciudad, pais } }.
const Direccion = { nombre: "Casa", direccion: { ciudad: "Chepen", pais: "Peru" } };
function mostrarDireccionCompleta({ nombre: n, direccion: { ciudad: c, pais: p } }) {
    console.log(`Nombre: ${n}, Ciudad: ${c}, País: ${p}`);
}
mostrarDireccionCompleta(Direccion);
// Define mostrarEmpresa que reciba { nombre, sede: { pais, ciudad } } y muestre "nombre (ciudad, pais)".
const empresa = { nombre: "TechCorp", sede: { pais: "USA", ciudad: "San Francisco" } };
function mostrarEmpresa({ nombre: n, sede: { pais: p, ciudad: c } }) {
    console.log(`${n} (${c}, ${p})`);
}
mostrarEmpresa(empresa);
// Escribe mostrarAutorLibro que reciba { titulo, autor: { nombre, nacionalidad } }.
const libroAutor = { titulo: "Cien Años de Soledad", autor: { nombre: "Gabriel García Márquez", nacionalidad: "Colombiano" } };
function mostrarAutorLibro({ titulo: t, autor: { nombre: n, nacionalidad: na } }) {
    console.log(`Título: ${t}, Autor: ${n}, Nacionalidad: ${na}`);
}
mostrarAutorLibro(libroAutor);
// Crea mostrarAlumnoDetalle con { nombre, carrera: { facultad, universidad } }.
const alumnoDetalle = { nombre: "Ana", carrera: { facultad: "Ingeniería", universidad: "PUCP" } };
function mostrarAlumnoDetalle({ nombre: n, carrera: { facultad: f, universidad: u } }) {
    console.log(`Nombre: ${n}, Facultad: ${f}, Universidad: ${u}`);
}
mostrarAlumnoDetalle(alumnoDetalle);
// Define mostrarMascotaDueño con { mascota: { nombre, tipo }, dueño: { nombre } }.
const mascotaDueno = { mascota: { nombre: "Luna", tipo: "Gato" }, dueño: { nombre: "Miguel" } };
function mostrarMascotaDueño({ mascota: { nombre: mn, tipo: mt }, dueño: { nombre: dn } }) {
    console.log(`Mascota: ${mn} (${mt}), Dueño: ${dn}`);
}
mostrarMascotaDueño(mascotaDueno);
// Crea mostrarCuentaCompleta que reciba { titular: { nombre }, banco: { nombre: bancoNombre } }.
const cuentaCompleta = { titular: { nombre: "Sofía" }, banco: { nombre: "Banco Central" } };
function mostrarCuentaCompleta({ titular: { nombre: nt }, banco: { nombre: nb } }) {
    console.log(`Titular: ${nt}, Banco: ${nb}`);
}
mostrarCuentaCompleta(cuentaCompleta);
// Define resumenPedidoDetallado con { cliente: { nombre }, producto: { nombre, precio } }.
const resumenPedido = { cliente: { nombre: "Laura" }, producto: { nombre: "Smartphone", precio: 800 } };
function resumenPedidoDetallado({ cliente: { nombre: nc }, producto: { nombre: np, precio: pp } }) {
    console.log(`Cliente: ${nc}, Producto: ${np}, Precio: ${pp}`);
}
resumenPedidoDetallado(resumenPedido);
// Escribe mostrarViaje con { destino: { pais, ciudad }, duracion }.
const viaje = { destino: { pais: "España", ciudad: "Madrid" }, duracion: 5 };
function mostrarViaje({ destino: { pais, ciudad }, duracion }) {
    console.log(`Viaje a ${ciudad}, ${pais}. Duración: ${duracion} días.`);
}
mostrarViaje(viaje);
// Crea mostrarConductorVehiculo con { conductor: { nombre }, vehiculo: { marca, modelo } }.
const conductorVehiculo = { conductor: { nombre: "Jorge" }, vehiculo: { marca: "Ford", modelo: "Focus" } };
function mostrarConductorVehiculo({ conductor: { nombre: nc }, vehiculo: { marca: vm, modelo: vl } }) {
    console.log(`Conductor: ${nc}, Vehículo: ${vm} ${vl}`);
}
mostrarConductorVehiculo(conductorVehiculo);
//Define mostrarProfesorCurso con { profesor: { nombre }, curso: { titulo, duracion } }.
const profesorCurso = { profesor: { nombre: "Lucía" }, curso: { titulo: "Matemáticas", duracion: "3 meses" } };
function mostrarProfesorCurso({ profesor: { nombre: np }, curso: { titulo: ct, duracion: cd } }) {
    console.log(`Profesor: ${np}, Curso: ${ct}, Duración: ${cd}`);
}
mostrarProfesorCurso(profesorCurso);
// Escribe mostrarPeliculaCompleta con { titulo, director: { nombre }, estudio: { pais } }.
const peliculaCompleta = { titulo: "Inception", director: { nombre: "Christopher Nolan" }, estudio: { pais: "USA" } };
function mostrarPeliculaCompleta({ titulo: t, director: { nombre: n }, estudio: { pais: p } }) {
    console.log(`Título: ${t}, Director: ${n}, Estudio: ${p}`);
}
mostrarPeliculaCompleta(peliculaCompleta);
// Crea mostrarComputadoraUsuario con { usuario: { nombre }, computadora: { marca, ram } }.
const computadoraUsuario = { usuario: { nombre: "Carlos" }, computadora: { marca: "Dell", ram: "16GB" } };
function mostrarComputadoraUsuario({ usuario: { nombre: nu }, computadora: { marca: cm, ram: cr } }) {
    console.log(`Usuario: ${nu}, Computadora: ${cm}, RAM: ${cr}`);
}
export {};
