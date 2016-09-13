/*
Realizar una calculadora que realize las siguientes operaciones sumar, restar, multiplicar y dividir:
Debera ingresar un valor mediante un prompt
Debera ingresar otro valor mediante otro prompt
Mostrar el resultado de cada operacion mediante distintos alert
*/

var numberA = parseInt(prompt('Ingrese un número'))
var numberB = parseInt(prompt('Ingrese otro numero número'))

var resultado = numberA + numberB;

alert('Sumando es igual a ' + resultado);

var resultado = numberA - numberB;
alert('Restando es igual a ' + resultado);

var resultado = numberA * numberB;
alert('Multiplicando es igual a ' + resultado);

var resultado = numberA / numberB;
alert('Dividiendo es igual a ' + resultado);