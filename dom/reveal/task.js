let blocks = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', () => {
    blocks.forEach((block) => {
        const {top, bottom} = block.getBoundingClientRect();
        if (bottom > 0 && top < window.innerHeight) {
            block.classList.add('reveal_active');
        } else {
            block.classList.remove('reveal_active')
        }
    })
}) 

// function isVisible() {
//     for (let block of blocks) {
//         const {top, bottom} = block.getBoundingClientRect();

//         if (bottom > 0 && top < window.innerHeight) {
//             block.classList.add('reveal_active');
//         } else {
//             block.classList.remove('reveal_active')
//         }
//     }
// }

// setInterval(isVisible, 1000);
