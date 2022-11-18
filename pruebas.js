function prueba(){
	window.alert("Hola");
	var arreglo = [9,1,0,5,8,3,2,1];
	var pruebaslice = arreglo.slice(1,4);
	document.getElementById('spanres').innerHTML = pruebaslice;
	document.getElementById('spanres').innerHTML = arreglo.indexOf(5);
}