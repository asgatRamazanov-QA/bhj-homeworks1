// task.js
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');
let tasks = [];

// добавление новой задачи
tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML = `
          <div class="task__title">${taskText}</div>
          <a href="#" class="task__remove">×</a>`;
        tasksList.appendChild(newTask);
        tasks.push(taskText);
        taskInput.value = '';
    }
});

// удаление задачи
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        const taskToRemove = event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        tasks = tasks.filter((task) => task !== event.target.parentNode.querySelector('.task__title').textContent.trim());
    }
});