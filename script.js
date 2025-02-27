// ==== Todo CRUD Management ====

//Array to store todos
let todoa = [];

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to render todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
         <span>${todo}</span>
         <button oneclick="editTodo(${index})">Edit</button>
         <button oneclick="deleteTodo(${index})">Delete</button>
      `;
      todoList.appendChild(li);
    });
}

// Function to edit a todo
function editTodo(index) {
    const updatedTodo = prompt('Edit yout todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are your sure want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}
 
// Event Listeners
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();