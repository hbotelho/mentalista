var numeroSecreto = parseInt(Math.random() * 11);

var i = 0;

function Chutar() {
	i++;
	console.log("tentativa " + i);
	var elementoTentativa = document.getElementById("tentativa");
	elementoTentativa.innerHTML = "Tentativa 0" + i + " de 03";

	var elementoResultado = document.getElementById("resultado");

	var chute = parseInt(document.getElementById("valor").value);
	console.log(chute);

	if (chute == numeroSecreto) {
		elementoResultado.innerHTML =
			"Yare Yare Daze, você acertou! O número secreto é " + numeroSecreto;
		document.getElementById("novo-numero").style.display = "block";
		document.getElementById("ok").style.display = "block";
		document.getElementById("no").style.display = "none";
		document.getElementById("nok").style.display = "none";
		document.getElementById("bad-entry").style.display = "none";
		console.log("acertou");
	} else if (i == 3 && chute !== numeroSecreto) {
		var elementoResultado = document.getElementById("resultado");
		elementoResultado.innerHTML =
			"Que pena, você não conseguiu. O número secreto é " + numeroSecreto;
		document.getElementById("no").style.display = "block";

		document.getElementById("ok").style.display = "none";
		document.getElementById("nok").style.display = "none";
		document.getElementById("novo-numero").style.display = "block";
		document.getElementById("bad-entry").style.display = "none";

		document.getElementById("chutar").style.display = "none";
	} else if (chute > 10 || chute < 0) {
		elementoResultado.innerHTML =
			"MUDA MUDA MUDA MUDA MUDAAAA!!! Tem quer ser um numero entre 0 e 10!!!";
		document.getElementById("no").style.display = "none";

		document.getElementById("ok").style.display = "none";
		document.getElementById("nok").style.display = "none";
		document.getElementById("bad-entry").style.display = "block";
	} else if (chute < numeroSecreto) {
		elementoResultado.innerHTML =
			"Você errou. O número secreto é MAIOR do que " + chute;
		document.getElementById("nok").style.display = "block";
		document.getElementById("ok").style.display = "none";
		document.getElementById("no").style.display = "none";
	} else if (chute > numeroSecreto) {
		elementoResultado.innerHTML =
			"Você errou. O número secreto é MENOR do que " + chute;
		document.getElementById("nok").style.display = "block";
		document.getElementById("ok").style.display = "none";
		document.getElementById("no").style.display = "none";
		document.getElementById("bad-entry").style.display = "none";
	}
}

function NovoNumero() {
	document.location.reload();
}

// dois sinais de igual (==) funcionam como comparação para o JS. um sinal apenas é input
// duas barras verticais (||) funcionam como operador lógico "OU"