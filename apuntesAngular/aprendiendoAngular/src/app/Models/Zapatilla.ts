export class Zapatilla{
    /*  METODO TRADICIONAL PARA DEFINIR UNA CLASE:
    public nombre: String;
    public precio: number;
    public color: String;
    public marca: String;
    public stock: boolean;

    constructor(nombre: String, precio: number, color: String, marca: string, stock:boolean){
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.marca = marca;
        this.stock = stock;
    }*/
    constructor(
        public nombre: String,
        public precio: number,
        public color: String,
        public marca: String,
        public stock: boolean
    ){}

    getMarca(){
        return this.marca
    }

}