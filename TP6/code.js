/* Crear el modulo IMDB
El array de peliculas tendra que ser privado del modulo
El modulo tendra que poder agregar una pelicula (ID y titulo)
Validar que la pelicula ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error
El modulo tendra que eliminar una pelicula por ID
El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por paramentro y mostrarlo en consola
El modulo tendra que persistir el array de peliculas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando */




function Pelicula(id, titulo) {

	this.id = id;
	this.titulo = titulo;

}


var IMBD = ( function() {

	var peliculas = [];

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
			guardarListadoPeliculas ();
			

		} else {

			alert('La pelicula con id: ' + pelicula.id + ' ya existe');
		}
	}

	function ordenarPeliculasPorId () {

		peliculas.sort( function (a,b) {

			return(a.id - b.id)

		});

			guardarListadoPeliculas();	
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

		guardarListadoPeliculas();	
	}

	function eliminarPelicula (id) {

		for(i = 0; i < peliculas.length; i++) {

			if(peliculas[i].id === id) {
				peliculas.splice(i,1);
				guardarListadoPeliculas();

				break;
			}
		}


	}

	function guardarListadoPeliculas () {

		var pelisGuardadas = JSON.stringify(peliculas);
		localStorage.setItem('peliculas', pelisGuardadas);
	}

	function recuperarListadoPeliculas () {
		var datos = localStorage.getItem('peliculas');
		if (datos !== null) {
			peliculas = JSON.parse(datos);
		}
	}

	var mostrarPeliculas = function () {
		console.log(JSON.stringify(peliculas));
	}

	recuperarListadoPeliculas();

	return {
		agregarPeliculaPublico: agregarPelicula,
		ordenarPeliculasPorIdPublico: ordenarPeliculasPorId,
		ordenarPeliculasPorTituloPublico: ordenarPeliculasPorTitulo,
		eliminarPeliculaPublico: eliminarPelicula,
		mostrarPeliculas: mostrarPeliculas

	}


})();

	/*var nuevaPeli = new Pelicula(13, 'Inception');
	agregarPelicula(nuevaPeli);

	var otraPeli = new Pelicula(5, 'Deadpool');
	agregarPelicula(otraPeli);*/
