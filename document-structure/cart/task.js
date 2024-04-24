counter();
addCart();

// Если есть дополнительные нажатия, например, при двойном клике, предотвратим выделение текста
document.addEventListener('mousedown', (event) => {
    if(event.detail > 1 ) {
      event.preventDefault();
    }
});

//Кнопки +-
function counter() {
    const productQuantity = [...document.querySelectorAll('.product__quantity')];
    productQuantity.forEach(el => {
        const count = el.querySelector('.product__quantity-value')

        el.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
            if (parseInt(count.textContent) === 1) {
                return
            } else {
                count.textContent = parseInt(count.textContent) - 1
            }
        })

        el.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
            count.textContent = parseInt(count.textContent) + 1
        })
    })
}

//Кнопка "Добавить в корзину"
function addCart() {
    const products = [...document.querySelectorAll('.product')];
    const cartProducts = document.querySelector('.cart__products');

    products.forEach(product => {
        const image = product.querySelector('.product__image').src;
        const count = product.querySelector('.product__quantity-value');

        product.querySelector('.product__add').addEventListener('click', () => {
            const id = product.dataset.id;
            const cards = [...document.querySelectorAll('.cart__product')];
            const productInCard = cards.find((element) => {
                return element.dataset.id === id                
            });            

            if(productInCard) {
                productInCard.children[1].textContent = parseInt(productInCard.children[1].textContent) + parseInt(count.textContent);
            } else {
                cartProducts.insertAdjacentHTML('beforeend',
                `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${count.textContent}</div>
                </div>
                `
                );
            }
        })
    })
}
