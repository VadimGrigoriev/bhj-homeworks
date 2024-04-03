const dropDownLink = Array.from(document.querySelectorAll('.dropdown__link'));
const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');

function openMenu() {
    dropDownValue.addEventListener('click', () => {
        dropDownList.classList.toggle('dropdown__list_active');
    })
};

function assignNewValue(event) {
    dropDownValue.textContent = this.textContent;
    event.preventDefault();
    dropDownList.classList.toggle('dropdown__list_active');
}

openMenu();

for (let index = 0; index < dropDownLink.length; index++) {
    dropDownLink[index].addEventListener('click', assignNewValue);
}

console.log(dropDownList.classList.contains("dropdown__list_active"));
console.log(dropDownLink);
console.log(dropDownValue.textContent);
