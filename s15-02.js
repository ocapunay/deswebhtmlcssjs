function analizar(){
	var vocal = document.getElementById('txtvocal').value;
	
	switch (vocal){
		case 'a':
			mensaje = "Ud. ingresó la vocal a";
			break;
		case 'e':
			mensaje = "Ud. ingresó la vocal e";
			break;
		case 'i':
			mensaje = "Ud. ingresó la vocal i";
			break;
		case 'o':
			mensaje = "Ud. ingresó la vocal o";
			break;
		case 'u':
			mensaje = "Ud. ingresó la vocal u";
			break;
		default:
			mensaje = "Ud. no ingresó una vocal";
	}

	document.getElementById('spanres').innerHTML = mensaje;
}