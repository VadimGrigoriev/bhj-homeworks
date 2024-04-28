
function main() {
    const btnClose = document.querySelector('.modal__close_times');

    //Если в cookie-файле нет информации о закрытии окна, появляется окно
    if (document.cookie.indexOf('isClosed=true') === -1) {
        document.querySelector('.modal').classList.add('modal_active');
        document.cookie = 'isClosed=false';
    }

    //Обработчик для кнопки закрытия окна
    btnClose.addEventListener('click', () => {
        const subscribe = document.querySelector('.modal');
        subscribe.classList.remove('modal_active');
        document.cookie = 'isClosed=true';
    })
};

main();