function main() {
    [...document.querySelectorAll('.has-tooltip')].forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();

            const nextTooltip = tooltip.nextElementSibling
            
            if (nextTooltip === null || !nextTooltip.classList.contains('tooltip')) {
                removeTooltips(); //удаляет все активные всплывающие подсказки с разметки
                const tooltipContent = document.createElement('div');
                tooltipContent.textContent = tooltip.title;
                tooltipContent.classList.add('tooltip', 'tooltip_active');

                let coords = tooltip.getBoundingClientRect();
                tooltipContent.style.top = coords.bottom + window.scrollY + 'px';
                tooltipContent.style.left = coords.left + window.scrollX + 'px';
                tooltipContent.style.position = 'absolute';

                tooltip.insertAdjacentElement('afterend', tooltipContent);
            } else {
                const tooltipContent = tooltip.nextElementSibling;
                tooltipContent.remove();
            }
        })
    })
}

function removeTooltips() {
    if (document.querySelectorAll('.tooltip')) {
        [...document.querySelectorAll('.tooltip')].forEach(tooltipActive => {
            tooltipActive.remove();
        })
    };
}


main();
