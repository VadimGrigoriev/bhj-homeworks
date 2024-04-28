const textarea = document.querySelector('#editor');
const localValue = localStorage.data;
const btn = document.querySelector('.reset');

if (localValue) {
    textarea.value = localStorage.data;
};

textarea.addEventListener('input', () => {
    localStorage.data = textarea.value;
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    textarea.value = ''
    localStorage.removeItem('data');
})
