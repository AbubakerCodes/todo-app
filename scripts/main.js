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
    todoList.forEach((todoObj, index) => {
        const todoItem = todoObj.name;
        const todoDate = todoObj.todoDate;
        const todoItemHTML = `
                    <p>${todoItem} </p> 
                    <p>${todoDate} </p>           
                    <button class ="js-delete-todo-item-btn">Delete</button>`;
        todoHTML += todoItemHTML;
    });
    myTodoListEle.innerHTML = todoHTML;
    // Select all delete button after it's been added to the HTML
    const deleteTodoBtnEle = document.querySelectorAll('.js-delete-todo-item-btn');
    // Loop thru deletBtns node
    deleteTodoBtnEle.forEach((deleteTodoBtn, index) => {
        deleteTodoBtn.addEventListener('click', () => {
            deleteTodoItem(index);
        });
    });
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
function deleteTodoItem(index) {
    // Delete item from todo list array
    todoList.splice(index, 1);
    // Also update the local storage
    localStorage.setItem('todoList', JSON.stringify(todoList));
    // Re-render the todolist
    renderTodoList();
}