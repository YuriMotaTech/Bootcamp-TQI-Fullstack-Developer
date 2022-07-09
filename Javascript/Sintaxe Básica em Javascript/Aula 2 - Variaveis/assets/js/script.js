// TIPOS PRIMITIVOS
/*
//boolean
var vOuf = false;
console.log(typeof(vOuf));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'yuri';
console.log(typeof(nome));

// function
var funcao = function() {}
console.log(typeof(funcao));
*/

// COMO DECLARAR
/*
var variavel = 'yuri';
variavel = 'mota';
console.log(variavel);

let variavel2 = 'yuri';
variavel2 = 'mota';
console.log(variavel2);

const constante = 'yuri';
console.log(constante);
*/

// ESCOPO
/*
var escopoGlobal = 'global';
console.log(escopoGlobal);

// Não imprime a variável escopoLocalInterno pois foi declarada localmente na função
function escopoLocal() {
    let escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno);

// Imprime a variável pois o comando console.log foi posto dentro da função
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();
*/

// Atribuição
var atribuicao = 'yuri';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação Idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//OPERADORES ARITMÉTICOS
// Adição 
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 2 - 1;
console.log(subtracao);

// Multiplicação 
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// Divisão Real 
var divisao = 6 /  2;
console.log(divisao);

// Divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação 
var potenciacao = 2 ** 10;
console.log(potenciacao);

//OPERADORES RELACIONAIS
// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 5 > 2;
console.log(menorQue);

// Maior ou igual
var maiorOuIgual = 5 > 2;
console.log(maiorOuIgual);

// Menor ou igual
var menorOuIgual = 5 > 2;
console.log(menorOuIgual);

//OPERADORES LÓGICOS
// E
var e = true && false;
console.log(e);

// Ou
var ou = true || false;
console.log(ou);

// Não
var nao = !true;
console.log(nao);