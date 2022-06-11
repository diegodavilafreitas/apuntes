// clase (molde del objeto)[la clase debería llevar el mismo nombre que el fichero]
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // private solo permite el acceso a estas propiedades desde la misma clase por lo que 
    // tenemos que crear un metodo para acceder a dichas propiedades y manipularlas
    // METODOS (funciones o acciones del objeto)[setters y getters]
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    // el getter recoje el valor de la propiedad
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setModelo = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getTalla = function () {
        return this.talla;
    };
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    return Camiseta;
}());
// si las propiedades de la clase son privadas.
var camiseta = new Camiseta();
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
console.log(camiseta.getColor());
