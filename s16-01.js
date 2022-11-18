function convEntero(){
	var cadena = document.getElementById('txtcadena').value;
	var entero = parseInt(cadena);
	document.getElementById('spanres').innerHTML = entero;
}

function convFlotante(){
	var cadena = document.getElementById('txtcadena').value;
	var flotante = parseFloat(cadena);
	document.getElementById('spanres').innerHTML = flotante;
}

function buscarPosicion(caracter){ 
	var cadena = document.getElementById('txtcadena').value;
	var posicion = cadena.indexOf(caracter);
	if(posicion>=0)
		document.getElementById('spanres').innerHTML = caracter + " se encuentra en la posición " + posicion;
	else
		document.getElementById('spanres').innerHTML = caracter + " no se encuentra en la cadena";
}

function buscarUltimaPosicion(caracter){ 
	var cadena = document.getElementById('txtcadena').value;
	var posicion = cadena.lastIndexOf(caracter);
	if(posicion>=0)
		document.getElementById('spanres').innerHTML = caracter + " se encuentra en la posición " + posicion;
	else
		document.getElementById('spanres').innerHTML = caracter + " no se encuentra en la cadena";
}

function partir(caracter){
	var cadena = document.getElementById('txtcadena').value;
	var partes = cadena.split(caracter);
	document.getElementById('spanres').innerHTML = partes[1];
	console.log(partes);
}

function extraer(inicio, final){
	var cadena = document.getElementById('txtcadena').value;
	var subcadena = cadena.slice(inicio, final);
	document.getElementById('spanres').innerHTML = subcadena;
}

function longitud(){
	var cadena = document.getElementById('txtcadena').value;
	var longitud = cadena.length;
	document.getElementById('spanres').innerHTML = longitud;
}

function primerCaracter(){
	var cadena = document.getElementById('txtcadena').value;
	var arreglo = [3,5,7,9,2,1,0];
	document.getElementById('spanres').innerHTML = arreglo[2];
}

function unir(caracter){
	var cadena = document.getElementById('txtcadena').value;
	var partes = cadena.split(',');
	console.log(partes);
	partes.pop(); // eliminar el último elemento de la lista
	console.log(partes);
	partes.sort();
	var union = partes.join(caracter);
	document.getElementById('spanres').innerHTML = union;
}