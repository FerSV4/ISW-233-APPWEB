import { Command, CommandExecutor, Commands } from "./services/command.js";
import { TodoList } from "./services/todoList.js";
globalThis.DOM = {};

function renderList(){
    const todoList = TodoList.getInstance();
    if (DOM.todoList) {
        DOM.todoList.innerHTML = '';
        
        for(const todo of todoList.items){ 
            const todoItemElement = document.createElement("li");
            
            todoItemElement.textContent = todo.text; 

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.dataset.id = todo.text; 

            todoItemElement.appendChild(deleteBtn);
            DOM.todoList.appendChild(todoItemElement);
        }
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoListElement = document.getElementById("todo-list");
    DOM.todoList = todoListElement;
    DOM.todoInput = todoInput;


    if (addBtn && todoInput) {
        addBtn.addEventListener("click", () => {
            const description = todoInput.value.trim();
            if (description) {
                const cmd = new Command(Commands.ADD, { description: description });
                CommandExecutor.execute(cmd); 
                todoInput.value = ""; 
            }
        });
    }

    if (DOM.todoList) {
        DOM.todoList.addEventListener("click", (event) => {
            if(event.target.classList.contains("delete-btn")){
                const todoId = event.target.dataset.id; 
                if (todoId) {
                
                    const cmd = new Command(Commands.DELETE, { id: todoId });
                    CommandExecutor.execute(cmd);
                }
            }
        });
    }

    renderList();
});

TodoList.getInstance().addObserver(renderList);