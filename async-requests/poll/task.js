main();


function main() {
    const title = document.querySelector('.poll__title');
    const answers = document.querySelector('.poll__answers');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status != 200) {
            return alert(`Ошибка: ${xhr.status}`)
        }

        const dataJson = JSON.parse(xhr.response);
        const id = dataJson.id;
        title.textContent = dataJson.data.title;

        for (const answer of dataJson.data.answers) {
            addButton(answers, answer)
        }

        const buttonAnswer = [...document.querySelectorAll('.poll__answer')];
        for (const el in buttonAnswer) {
            buttonAnswer[el].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
                answers.innerHTML = ''; //Удаляем все кнопки и заносим данные с POST запроса в title
                postData(title, id, el);
            })
        }
    })
}

//Создание кнопки
function addButton(answersList, answer) {
    answersList.insertAdjacentHTML('beforeend', 
    `
    <button class="poll__answer">
        ${answer}
    </button>
    `)
}

//Повышенный уровень сложности
//POST-запрос с параметром vote=id_опроса&answer=индекс_ответа_в_массиве_ответов
function postData(title, vote, answer) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`vote=${vote}&answer=${answer}`)
    xhr.addEventListener('load', () => {
        dataOutputFromPostRequest(title, xhr.response);
    })
};

//Вывод данных с POST запроса
function dataOutputFromPostRequest(title, data) {
    const stat = JSON.parse(data)['stat'];

    const sumVotes = stat.reduce((acc, item) => acc + parseInt(item['votes']), 0);//Сумма голосов

    for (const el of stat) {
        const percent = (el['votes']/sumVotes * 100).toFixed(2);//Проценты от общего числа голосов
        title.insertAdjacentHTML('beforeend', 
        `
        <br>${el['answer']}: <b>${percent}%</b>
        `)
    }
};
