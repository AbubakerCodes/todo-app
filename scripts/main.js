'use strict';
const inputTodoEle = document.getElementById('js-input-todo-item');
const addTodoBtnEle = document.getElementById('js-add-todo-item');
const todoDateEle = document.getElementById('js-todo-date');
const myTodoListEle = document.getElementById('js-my-todo-list');
// cretate an empty array of todo list
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Render todo list
    renderTodoList();
//Add todo items
addTodoBtnEle.addEventListener('click', addTodoItem);

function renderTodoList() { 
    // Update myTodo list
    let todoHTML = '';
    for(let i = 0; i < todoList.length; i++) {
        const todoObj = todoList[i];
        const todoItem = todoObj.name;
        const todoDate = todoObj.todoDate;
        const todoItemHTML = `
                    <p>${todoItem} </p> 
                    <p>${todoDate} </p>           
                    <button 
                        onclick = "todoList.splice(${i}, 1);
                        renderTodoList();"
                    >Delete</button>
                </input>`;
        todoHTML += todoItemHTML;
    }
    myTodoListEle.innerHTML = todoHTML;
    
    // clear input field
    inputTodoEle.value = '';
    // clear date field
    todoDateEle.value = '';
}

function addTodoItem() {
    const todoItem = inputTodoEle.value;
    const todoDate = todoDateEle.value;
    // add the input values to the list
    todoList.push({name: todoItem, todoDate: todoDate});
    // update my todo list
    renderTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList));
}