// O que são vetores e arrays

/*
// Como declarar um array
let array0 = ['string', 1, true];
console.log(array0);
console.log('------------------------');

// Pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(array[0]);
console.log('------------------------');

// MANIPULAÇÃO
// Itera um array forEach()
array.forEach(function(item, index){console.log(item,index)});
console.log('------------------------');

// Add item no final do array push()
array.push(1);
console.log(array);
console.log('------------------------');

// Remove item no final do array pop()
array.pop();
console.log(array);
console.log('------------------------');

// Remove item no início do array shift()
array.shift();
console.log(array);
console.log('------------------------');

// Add item no início do array unshift()
array.unshift('novo item no inicio');
console.log(array);
console.log('------------------------');

// Retorna o índice de um valor indexOf()
console.log(array.indexOf(true));
console.log('------------------------');

// Remove ou substitui um item pelo índice splice()
array.splice(0, 3);
console.log(array);
console.log('------------------------');

// Retorna uma parte de um array existente slice()
let novoArray = array.slice(0, 3);
console.log(novoArray);
console.log('------------------------');
*/

// MANIPULAÇÃO DE OBJETOS
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'object interno'}};

console.log(object);