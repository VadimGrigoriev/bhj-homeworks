const fontSizes = [...document.querySelectorAll('.font-size')];
const bookContent = document.querySelector('.book__content')


function deleteSize(classSize) {
    fontSizes.forEach((fontSize) => {
        fontSize.classList.remove(classSize)
    })
}

function getFontSizeName(fontSize) {
    const resultSize = fontSize.className.split(' ')
    return resultSize[1];
}



function changeFontSize() {

    fontSizes.forEach((fontSize) => {

        fontSize.addEventListener('click', (event) => {
            event.preventDefault();

            deleteSize('font-size_active'); //удаляем активный класс с элемента

            let fontSizeForText = getFontSizeName(fontSize); //получаем font-size для текста
            fontSize.classList.add('font-size_active');

            if (fontSizeForText === 'font-size_small') {
                bookContent.className = 'book__content';
                bookContent.classList.add('book_fs-small')
            } else if (fontSizeForText === 'font-size_big') {
                bookContent.className = 'book__content';
                bookContent.classList.add('book_fs-big')
            } else {
                bookContent.className = 'book__content';
            }
        })
    })
}

changeFontSize();
