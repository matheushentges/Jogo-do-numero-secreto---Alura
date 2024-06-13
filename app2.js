let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio!";



function botaoClick(params) {
    console.log("O botão foi clicado");
}

function alertaClick(params) {
    alert("Eu amo JS");
}

function promptClick(params) {
    let cidade = prompt("Diga uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somaClick(params) {
    let numero1 = parseInt(prompt("Digite um número inteiro"));
    let numero2 = parseInt(prompt("Digite outro número inteiro"));
    let resultado = numero1 + numero2; 
    alert(`A soma de  ${numero1} + ${numero2} é igual a: ${resultado}`);
}