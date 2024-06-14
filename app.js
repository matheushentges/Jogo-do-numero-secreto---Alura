let numeroSecreto = geraNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 10");
}


function verificarChute(params) {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas!" : "tentativa!";
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");        
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p","O número secreto é menor!");
        }
        else {
            exibirTextoNaTela("p","O número secreto é maior!");
        }
        tentativas ++
        limparCampo();
    }
}

function geraNumero() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = geraNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
exibirMensagemInicial()