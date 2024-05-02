const textarea = document.querySelector('#editor');
const btn = document.querySelector('.reset');

textarea.value = localStorage.getItem('data');

textarea.addEventListener('input', () => {
    // localStorage.data = textarea.value;
    localStorage.setItem('data', textarea.value);
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    textarea.value = ''
    localStorage.removeItem('data');
})
