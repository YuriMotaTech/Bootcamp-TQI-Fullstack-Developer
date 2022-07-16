/* Atividade
- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". 
*/

// TENTATIVA ANTES DE ASSISTIR RESOLUÇÃO

function compararVariaveis(num1, num2){

    let soma = num1 + num2;

    let igualdade = num1 == num2 ? "são" : "não são";

    if (soma == 10){
        compDez = "igual a"
    } else {
        var compDez = soma > 10 ? "maior que" : "menor que";
    }

    if (soma == 20) {
        compVinte = "igual a"
    } else {
        var compVinte = soma > 20 ? "maior que" : "menor que";
    }

    console.log('Os números ' + num1 + ' e ' + num2 + ' ' + igualdade + ' iguais. Sua soma é ' + soma + ', que é ' + compDez + ' 10 e ' + compVinte + ' 20!');
}

compararVariaveis(1, 2);

// EXPLICAÇÃO DA TUTORA

/* function comparaNumeros(num1, num2){
    if(!num1 || !num2) return 'Defina dois números!'
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparaNumeros(1, 2)); */