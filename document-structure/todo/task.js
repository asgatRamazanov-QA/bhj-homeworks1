const tasksInput = document.getElementById('task__input');
const tasksAddButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function taskAdd(event) {
    event.preventDefault();
    if (tasksInput.value) {
        const newTaskHTML = `
            <div class="task">
                <div class="task__title">
                    ${tasksInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        tasksList.insertAdjacentHTML('beforeEnd', newTaskHTML);
        tasksInput.value = '';
    }
}

tasksAddButton.addEventListener('click', taskAdd);
tasksInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        taskAdd();
    }
});

document.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('task__remove')) {
        target.parentNode.remove();
    }
});