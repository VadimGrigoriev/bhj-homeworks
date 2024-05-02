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


// Для улучшения функциональности кода можно рассмотреть возможность написания функции, принимающей опции для запроса в качестве параметров.
// Это позволит избежать создания второго инстанса XMLHttpRequest и сделает код более читаемым и модульным.
// В такой функции можно указать параметры запроса, такие как тип запроса, URL-адрес, данные и т.д., чтобы сделать ее более универсальной и гибкой.
// Кроме того, такой подход позволит легко настраивать запросы в будущем, избегая дублирования кода.

// Текущий код (упрощенный)
// javascript
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://example.com/data', true);
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send();

// Рефакторинг кода с функцией
// javascript
// function makeRequest(options) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(options.method, options.url, true);
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       options.callback(xhr.responseText);
//     }
//   };
//   xhr.send(options.data);
// }

// // Пример использования:
// makeRequest({
//   method: 'GET',
//   url: 'https://example.com/data',
//   callback: function(response) {
//     console.log(response);
//   }
// });

// // Еще один пример использования:
// makeRequest({
//   method: 'POST',
//   url: 'https://example.com/create',
//   data: JSON.stringify({ name: 'John', age: 30 }),
//   callback: function(response) {
//     console.log(response);
//   }
// });

// Преимущества
// Модульность: Функция makeRequest инкапсулирует логику создания запроса с помощью XMLHttpRequest, делая код более организованным и легким для поддержки.
// Читаемость: Функция принимает объект options в качестве аргумента, что делает код более понятным и самодокументирующимся.
// Гибкость: Функцию можно легко расширить для поддержки различных типов запросов (например, PUT, DELETE) и дополнительных опций (например, заголовки, таймаут).
// Многократное использование: Функцию можно многократно использовать в коде, уменьшая дублирование кода.
// Используя функцию для создания запросов, вы можете легко настроить и расширить поведение своих запросов XMLHttpRequest, делая код более поддерживаемым и эффективным.