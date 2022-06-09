// commando para transpilar TS a JS, en el directorio tsc -w *.ts
console.log('hola mundo con TS ');
// Tipos de datos
//string
var cadena = 'Hola :) toy probando TS';
// number
var edad = 12;
// boolean
var verdadero = true;
// Any
var cualquiera = 'hola';
cualquiera = 7;
//Arrays
var lenguajes = ['hola', 'solo añadibles'];
// para alternar los valores y que acepte el que sea se usa any listo
var leng = ['d', 2, false];
// esta es la otra forma de definir un Array
var year = [1, 2, 3, 3];
var cosa = ['hola', 2, false];
// | tuberia añade otro tipo admitible
var tuberia = 2;
tuberia = 'dos';
tuberia = false;
var alfa = 2;
alfa = 'dos';
// la diferencia entre let y var es el alcance ya que let declara a nivel de bloque y 
// var en el nivel global
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    var num1_1 = 44;
    var num2 = 55;
    console.log(num1_1, num2);
}
console.log(num1, num2);
// var nos permite redefinir el valor a nivel global, sin embargo let solo puede 
// actuar a nivel de bloque en este caso dentro de la sentencia condicional
console.log(cadena, edad);
