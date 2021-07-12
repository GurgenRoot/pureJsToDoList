const todoForm = document.querySelector('.todo-form');
const addInput = document.querySelector('.add-input');
const todoList = document.querySelector('.todo-list');
const todoItems = document.querySelectorAll('.todo-item');


const createTodoItem = (title) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    console.log(listItem)

    return listItem;
}

const addTodoItem = (event) => {
    event.preventDefault()

    if (!addInput.value) return alert('The task cannot be empty')

    const todoItem = createTodoItem(addInput.value)

    addInput.value = '';


}

todoForm.addEventListener('submit', addTodoItem)
