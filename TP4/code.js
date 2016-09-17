/*
El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno
*/

function objetoPelicula(id, titulo, descripcion, anio, duracion, actores, director) {
	this.id = id;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.anio = anio;
	this.duracion = duracion;
	this.actores = [];
	this,director = director;

	this.cambiarTitulo = function(titulo) {
		this.titulo = prompt('Ingrese nuevo Titulo');
		console.log('Aqui cambio el parametro Titulo: ' + this.titulo);
	}

	this.cambiarDescripcion = function(descripcion) {
		this.descripcion = prompt('Ingrese nueva Descripcion');
		console.log('Aqui cambio el parametro Descripcion: ' + this.descripcion);
	}

	this.cambiaranio = function(anio) {
		this.anio = prompt('Ingrese nuevo Año');
		console.log('Aqui cambio el parametro Año: ' + this.anio);
	}

	this.cambiarDuracion = function(duracion) {
		this.duracion = prompt('Ingrese nueva duracion');
		console.log('Aqui cambio el parametro Duracion: ' + this.duracion);
	}

	this.agregarActor = function(actores) {
		var actor = prompt('Ingrese Actor');
		this.actores.push(actor);
		var agregar = prompt('Quiere agregar un actor mas?');
		if (agregar === 'si') {
			this.agregarActor();
		} else {
			console.log('Aqui agregamos estos actores: ' + this.actores);

		}
	}

	this.cambiarDirector = function(director) {
		this.director = prompt('Ingrese nuevo director');
		console.log('Aqui cambio el parametro director: ' + this.director);
	}
}

