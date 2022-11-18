function validar(){
	var codigo = document.getElementById('txtcodigo').value;
	while( codigo != "certus" ){
		document.getElementById('spanres').innerHTML = "código incorrecto";
		codigo = prompt("Ingrese el código de verificación");
	}
	document.getElementById('spanres').innerHTML = "código correcto. Bienvenido!";
}