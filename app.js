let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = geraNumero();
let tentativas = 1;


//essa function ira pegar a tag e  substituir por um texto, a tag é a tag do HTML e o texto é o que vou passar
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//aqui  eu chamo a function anterior, inserindo os textos iniciais na tela, acionando a function
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 10");
}

//até aqui é o inicio das funçoes que irao mostrar as coisas iniciais na tela do usuário, pra baixo comeca as func do jogo 

//aqui comeca a funcao de gerar o numero secreto e montar os textos pra exibir na tela, varias vezes chama a function exibirtextonatela
function verificarChute() {
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
        tentativas++
        limparCampo();
    }
}


//aqui fica a funcao de gerar numero
function geraNumero() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumero();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

//funcao para limpar o campo input apos o usuario mandar o numero para verificacao
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

//funcao resetando o jogo e redefinindo os campos
function reiniciarJogo() {
    numeroSecreto = geraNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}


exibirMensagemInicial()

