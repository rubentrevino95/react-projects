//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//Functions

function addTodo(event) {
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');

    //create li
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    //Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        item.remove();
    }

}

console.log('hello')