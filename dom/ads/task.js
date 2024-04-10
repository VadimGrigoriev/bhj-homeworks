const content = [...document.querySelectorAll('.rotator__case')];

let activeIndex = 0;
let speedRotate = 0

function rotate() {
    content.forEach((text) => {
        text.classList.remove('rotator__case_active')
    });

    content[activeIndex].classList.add('rotator__case_active');
    activeIndex = (++activeIndex) % content.length;

    content[activeIndex].style.color = content[activeIndex].dataset.color;
    speedRotate = parseInt(content[activeIndex].dataset.speed);
    console.log(speedRotate);

    setTimeout(rotate, speedRotate)    
}

rotate();
