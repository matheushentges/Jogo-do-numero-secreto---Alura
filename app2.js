//Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld() {
    console.log("Hello World")
}
helloWorld();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacaoNome(nome) {
    console.log("Olá", nome);
}
saudacaoNome('Matheus');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobraNumero(numero) {
    console.log( numero* 2);
}
dobraNumero('10');

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(numero1, numero2, numero3) {
    return (numero1+ numero2 + numero3) /3;
}
let resultadoMedia = mediaNumeros(2,2,2)
console.log(resultadoMedia)

//outra variação da função acima
function mediaNumeros1(a, b, c) {
    console.log((a+b+c)/3);
}

mediaNumeros1(2,2,2);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(numero1);
}else {
    console.log(numero2);
}
}
numeroMaior(777,10)

//outra variação da função acima
function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);


//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(numero1) {
    return numero1*numero1;
}
let resultadoMultiplica = multiplicaNumero(2);
console.log(resultadoMultiplica);