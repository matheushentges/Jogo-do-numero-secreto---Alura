let numeroSecreto = geraNumero();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 10");

function verificarChute(params) {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}

function geraNumero() {
    return parseInt(Math.random() * 10 + 1);
}