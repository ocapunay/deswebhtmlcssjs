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

function buscarPosicion(){
	var cadena = document.getElementById('txtcadena').value;
	var posicion = cadena.indexOf('a');
	if(posicion>=0)
		document.getElementById('spanres').innerHTML = "a se encuentra en la posicion "+posicion;
	else
		document.getElementById('spanres').innerHTML = "a no está en la cadena";
}

function buscarUltimaPosicion(caracter){
	var cadena = document.getElementById('txtcadena').value;
	var posicion = cadena.lastIndexOf(caracter);
	if(posicion>=0)
		document.getElementById('spanres').innerHTML = caracter + " se encuentra en la posicion "+posicion;
	else
		document.getElementById('spanres').innerHTML = caracter + " no está en la cadena";
}

function partir(caracter){
	var cadena = document.getElementById('txtcadena').value;
	var partes = cadena.split(caracter);
	console.log(partes);
	document.getElementById('spanres').innerHTML = "La cadena se dividió en " + partes.length + " partes";
}

function extraer(inicio, final){
	var cadena = document.getElementById('txtcadena').value;
	var subcadena = cadena.slice(inicio,final);
	document.getElementById('spanres').innerHTML = subcadena;
}

function unir(caracter){
	var cadena = document.getElementById('txtcadena').value;
	var partes = cadena.split(caracter);
	console.log(partes);
	partes.pop();
	console.log(partes);
	partes.sort();
	var union = partes.join(' - ');
	document.getElementById('spanres').innerHTML = union;
}
