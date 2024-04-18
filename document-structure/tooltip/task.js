function main() {
    [...document.querySelectorAll('.has-tooltip')].forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();
            
            if (!tooltip.querySelector('div')) {
                removeTooltips(); //удаляет все активные всплывающие подсказки с разметки
                const tooltipContent = document.createElement('div');
                tooltipContent.textContent = tooltip.title;
                tooltipContent.classList.add('tooltip', 'tooltip_active');

                let coords = tooltip.getBoundingClientRect();
                tooltipContent.style.top = coords.bottom + window.scrollY + 'px';
                tooltipContent.style.left = coords.left + window.scrollX + 'px';
                tooltipContent.style.position = 'absolute';
                console.log(window.scrollY);

                tooltip.appendChild(tooltipContent)
            } else {
                const tooltipContent = tooltip.querySelector('div');
                tooltipContent.remove();
                return;
            }
        })
    })
}

function removeTooltips() {
    if (document.querySelectorAll('.tooltip')) {
        [...document.querySelectorAll('.tooltip')].forEach(tooltipActive => {
            tooltipActive.remove();
        })
    } else return;
}

main();
