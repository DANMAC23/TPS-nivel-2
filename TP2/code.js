/*
Debera poder ingresar un dia de la semana
Debera poder compararlo con todos los dias de la semana
Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
En caso de cnontrar el dia utilizar la sentencia break y terminar el for
*/

var dia = prompt('Ingrese un día de la semana');
var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

for (i = 0; i < semana.length; i++) {
	
	if (dia === semana[i] && i < 5) {
		alert(dia + ' Es un día habil');
		break;
	} else if(dia === semana[i] && i > 4){
		alert(dia + ' Es finde semana wiiii');	
		break;
	} 
}