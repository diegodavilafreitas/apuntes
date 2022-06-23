// commando para transpilar TS a JS, en el directorio tsc -w *.ts
console.log('hola mundo con TS ');

// Tipos de datos

//string
let cadena: string = 'Hola :) toy probando TS';

// number
let edad: number = 12;

// boolean
let verdadero :boolean = true;

// Any
let cualquiera :any = 'hola'
cualquiera = 7

//Arrays
var lenguajes :Array<string> = ['hola','solo añadibles'];
// para alternar los valores y que acepte el que sea se usa any listo
var leng :Array<any> = ['d',2,false];
// esta es la otra forma de definir un Array
let year: number[] = [1,2,3,3];

let cosa: any[] = ['hola',2,false];

// | tuberia añade otro tipo admitible

let tuberia: string | number | boolean= 2;
tuberia = 'dos';
tuberia = false;

// con type puedes crearte un tipo de dato
type alfanumerico = string | number;
let alfa: alfanumerico = 2;
alfa = 'dos';

// la diferencia entre let y var es el alcance ya que let declara a nivel de bloque y 
// var en el nivel global

var num1 = 10;
var num2=12;

if (num1== 10){
    let num1 = 44;
    var num2 = 55;
    console.log(num1,num2);
}
console.log(num1,num2);
// var nos permite redefinir el valor a nivel global, sin embargo let solo puede 
// actuar a nivel de bloque en este caso dentro de la sentencia condicional
console.log(cadena, edad);
