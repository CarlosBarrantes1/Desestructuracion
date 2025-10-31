
export interface Persona {
    nombre:string; 
    apellido?: string;
    profesion?:string;
}

export interface Producto{
    nombre: string;
    precio?: number;
    stock?: number;
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
    autor?:string;
    paginas?:number;
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
    titular?:string;
    saldo?:number;
    numero?:number;
}

export interface Empleado {
    nombre:string;
    puesto:string;
}
export interface Alumno{
    nombre:string;
    curso?:string;
}
export interface Clima{
    ciudad:string;
    grados?:number;
}

export interface Cliente{
    nombre:string;
    categoria:string;
}

export interface Servidor{
    ip: string;
    puerto?: number;
}

export interface Curso {
    nombre: string;
    nivel?: string;
}

export interface Pedido {
    id: number;
    estado?: string;
}

export interface Evento {
    nombre: string;
    fecha: string;
}   

export interface UsuarioCompacto {
    user: string;
    activo?: boolean;
}

export interface ProductoAlias {
    nombre:string,
    precio:number
}

export interface Pelicula {
    titulo:string;
    genero?:string;
}

// Nivel 3 – Desestructuración anidada y tipos compuestos
export interface Direccion{
    nombre:string;
    direccion:{
        ciudad:string;
        pais:string;
    }
}

export interface Empresa {
    nombre:string;
    sede:{
        pais:string;
        ciudad:string;
    }   
}
export interface AutorLibro {
    titulo:string;
    autor:{
        nombre:string;
        nacionalidad:string;
    }
}
export interface AlumnoDetalle {
    nombre:string;
    carrera:{
        facultad:string;
        universidad:string;
    }
}

export interface MascotaDueno {
    mascota:{
        nombre:string;
        tipo:string;
    };
    dueño:{
        nombre:string;
    }
}

export interface CuentaCompleta {
    titular:{
        nombre:string;
    };
    banco:{
        nombre:string;
        bancoNombre?:string;
    }
}

export interface ResumenPedido {
    cliente:{
        nombre:string;
    };
    producto:{
        nombre:string;
        precio:number;
    }
}

export interface Viaje {
    destino:{
        pais:string;
        ciudad:string;
    };
    duracion:number;
}

export interface ConductorVehiculo { 
    conductor:{
        nombre:string;
    };
    vehiculo:{
        marca:string;
        modelo:string;
    }
}

export interface ProfesorCurso {
    profesor : {
        nombre:string;
    };
    curso : {
        titulo:string;
        duracion?:string;
    }
}

export interface PeliculaCompleta {
    titulo:string;
    director: {
        nombre:string;
    };
    estudio: {
        pais?:string;
    }
}
export interface ComputadoraUsuario {
    usuario:{
        nombre:string;
    };
    computadora:{
        marca:string;
        ram?:string;
    }
}