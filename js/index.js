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

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    bindEvents(listItem);

    return listItem;
};

const addTodoItem = (event) => {
    event.preventDefault();

    if (!addInput.value) return alert('The task cannot be empty');

    const todoItem = createTodoItem(addInput.value);

    todoList.appendChild(todoItem);

    addInput.value = '';

};

function toggleTodoItem() {
    const listItem = this.parentNode;
    listItem.classList.toggle('completed');
}

function editTodoItem({target}) {
    const listItem = target.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.innerText = editInput.value;
        target.innerText = 'Edit';
    } else {
        editInput.value = title.innerText;
        target.innerText = 'Save';
    }

    listItem.classList.toggle('editing');
}

function deleteTodoItem({target}) {
    const listItem = target.parentNode;
    todoList.removeChild(listItem);
}

const bindEvents = (todoItem) => {
    const checkBox = todoItem.querySelector('.checkbox');
    const editBtn =  todoItem.querySelector('button.edit');
    const deleteBtn = todoItem.querySelector('button.delete');
    checkBox.addEventListener('change', toggleTodoItem);
    editBtn.addEventListener('click', editTodoItem);
    deleteBtn.addEventListener('click', deleteTodoItem);

};

todoForm.addEventListener('submit', addTodoItem);
