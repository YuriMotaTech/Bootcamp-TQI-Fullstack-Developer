'use strict';

let banco = [
    {'task':'Estudar JS', 'status':''},
    {'task':'Filme Homem do Norte', 'status':'checked'}
]

const addToDo = (task, status) => {

    const item = document.createElement('label');
    item.classList.add('items');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${task}</div>
        <input type="button" value="X">
    `;
    document.getElementById('toDoList').appendChild(item);
}

const clearTask = () => {
    const toDoList = document.getElementById('toDoList');
    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.lastChild);
    }
}

const atualizarTela = () => {
    clearTask();
    banco.forEach(item => addToDo(item.task, item.status));
}

const insertNewTask = (event) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla == 'Enter'){
        banco.push ({'task': texto, 'status':''});
        atualizarTela();
    }
}

document.getElementById('textValue').addEventListener('keypress', insertNewTask);

atualizarTela();