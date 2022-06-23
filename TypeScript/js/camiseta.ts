// Interfaz || Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorador
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log('camiseta estampada con el logo de '+logo);
        }
    }
}
// clase (molde del objeto)[la clase debería llevar el mismo nombre que el fichero]
@estampar('batman')
class Camiseta implements CamisetaBase{
    // propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // private solo permite el acceso a estas propiedades desde la misma clase por lo que 
    // tenemos que crear un metodo para acceder a dichas propiedades y manipularlas
    // METODOS (funciones o acciones del objeto)[setters y getters]
    public setColor(color: string){
        this.color = color;
    }
    // el getter recoje el valor de la propiedad
    public getColor():string{
        return this.color;
    }
    public getModelo():string{
        return this.modelo;
    }
    public setModelo(modelo: string){
        this.modelo = modelo;
    }
    public getMarca():string{
        return this.marca;
    }
    public setMarca(marca: string){
        this.marca = marca;
    }
    public getTalla():string{
        return this.talla;
    }
    public setTalla(talla: string){
        this.talla = talla;
    }
    public getPrecio():number{
        return this.precio;
    }
    public setPrecio(precio: number){
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

// Clase hija

class Sudadera extends Camiseta{

    private capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha
    }
    // tienes que volver a declarar las variables para capturarlas y pasarlas al superClass del constructor.
    constructor(capucha: boolean, color:String, modelo:string, marca:string, talla:string, precio:number){
        super(color,modelo,marca,talla,precio);
        this.capucha = capucha;
    }


}

var sudaderaNike = new Sudadera(false,'rojo','larga','nike','L',12);

console.log(sudaderaNike)

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
    camiseta.estamacion();

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
