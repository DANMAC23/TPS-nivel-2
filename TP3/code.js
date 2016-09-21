/*
Debera poder ingresar 2 valores
Debera poder ingresar que operacion quiere realizar
Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
Debera mostrar el resultado de la operacion en consola
*/

var numberA = parseInt(prompt('Ingrese un número'));
var numberB = parseInt(prompt('Ingrese un segundo número'));
var operacion = prompt('Ingrese un tipo de operacion entre suma, resta, multiplicación y divición');

function sumar(numberA, numberB) {
	console.log(numberA + numberB);
}

function restar(numberA, numberB) {
	console.log(numberA - numberB);
}

function multiplicar(numberA, numberB) {
	console.log(numberA * numberB);
}

function dividir(numberA, numberB) {
	console.log(numberA / numberB);
}

switch (operacion) {
	case '+':
	case 'sumar': 
	sumar(numberA, numberB);
	break;

	case '-':
	case 'restar':
	restar(numberA, numberB);
	break;

	case '*':
	case 'multiplicar':
	multiplicar(numberA, numberB);
	break;

	case '/':
	case 'dividir':
	dividir(numberA, numberB);
	break;
}