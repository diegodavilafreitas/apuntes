
var bicicleta = {
    color: 'rojo',
    modelo: 'bmx',
    frenos: 'disco',
    velocidadMaxima: '60km/h',
    cambiaColor : function(nuevoColor){
        //bicicleta.color(nuevoColor)
        this.color = nuevoColor
    }
};
console.log(bicicleta)
