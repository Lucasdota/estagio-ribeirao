function checarPalavra() {
	const palavra = document.getElementById("palavra").value.toLowerCase();
	let contagem = 0;
	for (let i = palavra.length - 1; i >= 0; i--) {
		if (palavra[i] === 'a') {
			contagem++;
		}
	}

	if (contagem > 0) {
		document.getElementById("resposta-palavra").innerHTML = "A palavra \"" + palavra + "\" contém " + contagem + " letra(s) A."
	} else {
		document.getElementById("resposta-palavra").innerHTML = "A palavra " + palavra + " não contém a letra A."
	}
}