const cart = document.querySelector('.cart__products');
const valueButtons = document.querySelectorAll('.product__quantity-control');
const addButtons = document.querySelectorAll('.product__add');

valueButtons.forEach((button) => {
    button.addEventListener('click', updateQuantity);
});

addButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
});

function updateQuantity(event) {
    const value = event.target.parentNode.querySelector('.product__quantity-value');
    const count = parseInt(value.textContent.trim());
    if (event.target.classList.contains('product__quantity-control_inc')) {
        value.textContent = count + 1;
    } else if (count > 1) {
        value.textContent = count - 1;
    }
}

function addToCart(event) {
    const product = event.target.closest('.product');
    const id = product.dataset.id;
    const countFromProduct = parseInt(product.querySelector('.product__quantity-value').textContent);

    const existingProduct = cart.querySelector(`[data-id="${id}"]`);
    if (existingProduct) {
        const productCount = existingProduct.querySelector('.cart__product-count');
        productCount.textContent = parseInt(productCount.textContent) + countFromProduct;
    } else {
        const productImg = product.querySelector('.product__image').src;
        const productToCartHTML = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${countFromProduct}</div>
                            </div>`;
        cart.insertAdjacentHTML('beforeend', productToCartHTML);
    }
}