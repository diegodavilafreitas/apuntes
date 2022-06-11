// clase (molde del objeto)[la clase debería llevar el mismo nombre que el fichero]
export class Camiseta{
    // propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // private solo permite el acceso a estas propiedades desde la misma clase por lo que 
    // tenemos que crear un metodo para acceder a dichas propiedades y manipularlas
    // METODOS (funciones o acciones del objeto)[setters y getters]
    public setColor(color){
        this.color = color;
    }
    // el getter recoje el valor de la propiedad
    public getColor(){
        return this.color;
    }
    public getModelo(){
        return this.modelo;
    }
    public setModelo(modelo){
        this.modelo = modelo;
    }
    public getMarca(){
        return this.marca;
    }
    public setMarca(marca){
        this.marca = marca;
    }
    public getTalla(){
        return this.talla;
    }
    public setTalla(talla){
        this.talla = talla;
    }
    public getPrecio(){
        return this.precio;
    }
    public setPrecio(precio){
        this.precio = precio;
    }
    // Constructores
    constructor(color,modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

}

// si las propiedades de la clase son privadas.
    var camiseta = new Camiseta('azul','nike','corta',10,'M');
    console.log(camiseta);
    console.log(camiseta.getColor())

    camiseta.setColor('rojo');
    camiseta.setMarca('Addidas');
    camiseta.setModelo('Larga');
    camiseta.setPrecio(12);
    camiseta.setTalla('L');
// si las propiedades de la clase fueras publicas.
/*
var camiseta = new Camiseta();
camiseta.color = 'azul';
camiseta.modelo='azure';
camiseta.marca='gucci',
camiseta.talla='L';
camiseta.precio=9.99;
*/
console.log(camiseta);
// el getter recoje el valor de la propiedad
console.log(camiseta.getColor())
