/*
//Crie uma função que calcule o índice de massa corporal (IMC) 
//de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaImc(peso, altura) {
    return (peso/(altura*2));
}
let resultadoImc = calculaImc(100, 1.87);
console.log(resultadoImc);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculaFatorial(numero) {
   if (numero === 0 || numero === 1) {
     return 1;
   }


let fatorial =1;

for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calculaFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolar(valor) {
    return valor * 4.8;
}

let conversaoAtual  = converterDolar(15);
console.log(`O valor de $15 é equivalente a R$${conversaoAtual}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function perimetroSala(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    alert(`Área da sala: ${area} metros quadrados`);
    alert(`Área do perimetro: ${perimetro} metros`); 
}

let altura = 5;
let largura = 6;

perimetroSala(altura,largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    alert(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    alert(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);
  */

  //Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

  function mostraTabuada(numero) {
    for (let numeroinformado = 1; numeroinformado <=10; numeroinformado++) {
        let  resultado = numero * numeroinformado;
        console.log(`${numero} x ${numeroinformado} = ${resultado}`);
        
    }
  }

  // Exemplo de uso
let numeroinformado = 7;
mostraTabuada(numeroinformado);