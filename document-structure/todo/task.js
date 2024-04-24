const tasksInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const form = document.forms.tasks__form;


function main() {
    //Добавление задачи по клику по кнопке
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask()
    });

    window.addEventListener('load', () => {
        getTasksFromLocalStorage();
    })
};

//Удаление задачи при клике по крестику
function deleteTask() {
    [...document.querySelectorAll('.task__remove')].forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.target.closest('.task').remove();
            addLocalStorage();
        })
    });
};

//Добавление задачи
function addTask() {
    if (tasksInput.value.trim() !== '') {
        addHTML(tasksInput.value.trim());
        addLocalStorage();
        form.reset(); 
    }
};

//Формирование localStorage
function addLocalStorage() {
    const tasks = [];
    const tasksTitle = [...document.querySelectorAll('.task__title')];

    if (tasksTitle) {
        tasksTitle.forEach(el => {
            tasks.push(el.textContent.trim())
        })
    }
    const serialTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serialTasks);
}

//Загрузка данных из localStorage
function getTasksFromLocalStorage() {
    const data = localStorage.getItem('tasks');

    if (data) {
        JSON.parse(data).forEach(task => {
            addHTML(task);
        })
    }
}

//Добавить задачу в HTML
function addHTML(task) {
    tasksList.insertAdjacentHTML('beforeend', 
    `
    <div class="task">
        <div class="task__title">
            ${task}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `)
    deleteTask();
}

main();

