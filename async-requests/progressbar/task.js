const progressBar = document.querySelector('#progress');
const form = document.forms.form;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    xhr.upload.onprogress = (el) => {
        if (el.lengthComputable) {
            progressBar.value = el.loaded / el.total;
            console.log(el.loaded + '---' + el.total);
            console.log(progressBar.value);
        }
    }

    xhr.onloadend = function() {
        alert(JSON.parse(xhr.response).message);
    };

    xhr.send(new FormData(form));
})
