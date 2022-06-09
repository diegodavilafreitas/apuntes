// clase (molde del objeto)[la clase debería llevar el mismo nombre que el fichero]
class Camiseta{
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
        this.color = color
    }
    // el getter recoje el valor de la propiedad
    public getColor(){
        return this.color
    }
}
// si las propiedades de la clase son privadas.
    var camiseta = new Camiseta();
    camiseta.setColor('rojo');
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