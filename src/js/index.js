const main = (document => {
    const todoForm = document.querySelector('.todo-form');
    const addInput = document.querySelector('.add-input');
    const todoList = document.querySelector('.todo-list');
    const todoItems = document.querySelectorAll('.todo-item');

    const createElement = (tag, props, ...children) => {
        const element = document.createElement(tag);

        Object.keys(props).forEach(key => element[key] = props[key]);

        if(children.length > 0) {
            children.forEach( child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }

                element.appendChild(child);
            })
        }

        return element;
    }

    const createTodoItem = (title) => {
        const checkbox = createElement('input', {type: 'checkbox', className: 'checkbox'});
        const label = createElement('label', {className: 'title'}, title);
        const editInput = createElement('input', {type: 'text', className: 'textfield'});
        const editButton = createElement('button', {className: 'edit'}, 'Edit');
        const deleteButton = createElement('button', {className: 'delete'}, 'Delete');
        const listItem = createElement('li', {className: 'todo-item'}, checkbox, label, editInput, editButton, deleteButton);

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
    const main = () => {
        todoForm.addEventListener('submit', addTodoItem);
        todoItems.forEach(item => bindEvents(item));
    }

    return main;
})(document)

main();
