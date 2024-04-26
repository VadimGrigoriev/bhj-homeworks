main();
localStorage.removeItem("items");


function main() {
    const items = document.querySelector('#items');
    const loader = document.querySelector('.loader');
    const itemsForLocalStorage = {}; //Массив для передачи в localStorage

    getItemsFromLocalStorage(items);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status != 200) {
            return alert(`Ошибка: ${xhr.status}`);
        }

        const valutes = JSON.parse(xhr.response).response.Valute;
        items.innerHTML = ''; //удаление данных, загруженных с localStorage
        for (const valute in valutes) {
            const value = valutes[valute].Value;
            itemsForLocalStorage[valute] = value; //добавление валюты в массив
            addItem(items, valute, value); //добавление валюты в разметку
        }
        loader.classList.remove('loader_active');
        addLocalStorage(itemsForLocalStorage);
    });
}

//Добавить валюту в HTML
function addItem(itemsList, valute, value) {
    itemsList.insertAdjacentHTML('beforeend', 
    `
    <div class="item">
        <div class="item__code">
            ${valute}
        </div>
        <div class="item__value">
            ${value}
        </div>
        <div class="item__currency">
            руб.
        </div>
  </div>
    `)
}

//Формирование localStorage
function addLocalStorage(list) {
    localStorage.setItem('items', JSON.stringify(list));
}

//Загрузка данных из localStorage
function getItemsFromLocalStorage(itemsList) {
    const data = localStorage.getItem('items');

    if (data) {
        const valutes = JSON.parse(data);
        for (const valute in valutes) {
            addItem(itemsList, valute, valutes[valute]);
        }
    }
}
