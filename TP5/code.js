/* Crear un array de peliculas
Crear una funcion que agregue una pelicula al array de peliculas
La pelicula debera tener un ID y un Titulo
Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
Crear una funcion que ordene las peliculas por Titulo y por ID
Crear una funcion que elimine una pelicula por su ID. */


var peliculas = [];

function Pelicula(id, titulo) {

	this.id = id;
	this.titulo = titulo;

}

function existePelicula (pelicula) {

	var pos = -1;

	for(i = 0; i < peliculas.length && pos === -1; i++) {

		if(peliculas[i].id === pelicula.id) {

			pos = i;
		}
	}

	return pos;
}


function agregarPelicula (pelicula) {

	var pos = existePelicula(pelicula);

	if (pos === -1) {

		peliculas.push(pelicula);

	} else {

		alert('La pelicula con id: ' + pelicula.id + ' ya existe');
	}
}

function ordenarPeliculasPorId () {

	peliculas.sort(function (a,b) {

		return(a.id - b.id)
	});	
}


// SORT
// 1 esto significa que A > B
// 0 significa que A === B
// -1 significa que A < B

function ordenarPeliculasPorTitulo () {

	peliculas.sort(function (a,b) {

	if (a.titulo > b.titulo){
		return 1;
	}

	if (a.titulo < b.titulo){
		return -1;
	}
		return 0;

	});	
}

function eliminarPelicula (id) {

	for(i = 0; i < peliculas.length; i++) {

		if(peliculas[i].id === id) {
			peliculas.splice(i,1);
			break;
		}
	}
}


var nuevaPeli = new Pelicula(13, 'Inception');
agregarPelicula(nuevaPeli);

var otraPeli = new Pelicula(5, 'Deadpool');
agregarPelicula(otraPeli);
