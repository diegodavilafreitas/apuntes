// funciones
// cuando le paso el nombre estoy ya definiendo el tipo de dato
function getNombre(nombre) {
    if (nombre === void 0) { nombre = ''; }
    return ('el nombre es ' + nombre);
}
console.log(getNombre('Jose'));
/*function getNumero(numero:number = 0):string{
    return 'el numero es '+numero;
}*/ 
