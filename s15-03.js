function calcular(){
	var v1 = document.getElementById('txtnota1').value;
	var v2 = document.getElementById('txtnota2').value;
	var v3 = document.getElementById('txtnota3').value;

	v1 = parseFloat(v1)*0.2;
	v2 = parseFloat(v2)*0.3;
	v3 = parseFloat(v3)*0.5;

	notafinal = (v1 + v2 + v3).toFixed(2);
	document.getElementById('txtfinal').value = notafinal;
	
	if(notafinal >= 12){
		document.getElementById('spanres').innerHTML = "APROBADO";
	} else {
		document.getElementById('spanres').innerHTML = "DESAPROBADO";
	}
	
}