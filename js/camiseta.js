var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('camiseta estampada con el logo de ' + logo);
        };
    };
}
// clase (molde del objeto)[la clase debería llevar el mismo nombre que el fichero]
var Camiseta = /** @class */ (function () {
    // Constructores
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
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
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
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
    Camiseta = __decorate([
        estampar('batman')
    ], Camiseta);
    return Camiseta;
}());
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    // tienes que volver a declarar las variables para capturarlas y pasarlas al superClass del constructor.
    function Sudadera(capucha, color, modelo, marca, talla, precio) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudaderaNike = new Sudadera(false, 'rojo', 'larga', 'nike', 'L', 12);
console.log(sudaderaNike);
// si las propiedades de la clase son privadas.
var camiseta = new Camiseta('azul', 'nike', 'corta', 10, 'M');
console.log(camiseta);
console.log(camiseta.getColor());
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
console.log(camiseta.getColor());
