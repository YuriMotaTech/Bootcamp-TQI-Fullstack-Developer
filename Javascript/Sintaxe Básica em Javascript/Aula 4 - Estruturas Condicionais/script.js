var jogador1 = 0;
var jogador2 = 0;
var placar;

/* If | Else If | Else */
/* Ninho de If */

/* if (jogador1 != -1){
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0){
        console.log('Jogador 2 marcou ponto!');
    } else {
        console.log('Ninguém marcou ponto');
    }
} */

 
/* If Ternário */

/* jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

// usando if
if (jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} 
// usando else if
else if (jogador2 > 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
} 
// usando else
else {
    console.log('Ninguém marcou ponto');
} */

/* Switch Case */

/*switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('Niguém ganhou');
} 
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1:'valor1', propriedade2:'valor2', propriedade3:'valor3'}

/* // for - executa uma instrução até que ela seja falsa
for (let index = 0; index < array.length; index++){
    console.log(index);
}

// for/in executa repetiçao a partir de uma propriedade
// com array
for (let i in array) {
    console.log(i);
}

// com object
for (i in object) {
    console.log(i);
} */

/* // for/of executa repetião a partir de valor
// com array
for (i of array) {
    console.log(i);
}

// com object
for(i of object.propriedade1){
    console.log(i);
} */

var a = 0;

/* // while - verificação é feita antes da execução
while (a < 10){
    a++;
    console.log(a);
} */

// do/while - executa uma intrução até que determinada condição seja falsa
do {
    a++;
    console.log(a);
} while (a < 10);