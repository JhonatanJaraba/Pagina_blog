export class Producto {
    id?: number;
    nombre: string;
    contenido: string;
    fecha: Date;
    imagen: string;
    

    constructor(nombre: string, contenido: string, imagen: string, fecha: Date) {
        this.nombre = nombre;
        this.contenido = contenido;
        this.fecha = fecha;
        this.imagen = imagen;
    }
}


