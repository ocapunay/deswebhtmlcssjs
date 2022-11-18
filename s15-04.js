function calcular(){
	var n = parseInt(document.getElementById('txtvalor').value);
	suma = 0;
	for(i=n;i>=1;i--){ // i++ -> i = i+1 -> i+=1 incremento
		suma = suma + i;
	}
	document.getElementById('spanres').innerHTML = suma;
}