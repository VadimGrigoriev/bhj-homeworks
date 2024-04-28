const signin = document.querySelector('.signin');
const form = document.forms.signin__form;
const welcome = document.querySelector('.welcome');
const btnLogout = document.querySelector('.logout');

//Проверка на авторизацию. Если пользователь авторизован, выводится приветствие.
if (localStorage.id) {
    printWelcome()
}

//Обработчик для проверки имени и пароля при отправке формы
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(new FormData(form));

    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        if (response.success) {
            localStorage.id = response['user_id'];
            printWelcome();
        } else {
            alert('Неверный логин/пароль');
            form.reset(); //Очистка формы при неверном логине/пароле
        }
    }
});

//Деавторизация
btnLogout.addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.removeItem('id');
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
})

//Функция убирает форму и выводит приветствие
function printWelcome() {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    document.querySelector('#user_id').innerHTML = localStorage.id;
};
