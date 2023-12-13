let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;

    const cartList = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');

    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - $${price.toFixed(2)}`;
    cartList.appendChild(listItem);

    totalDisplay.textContent = `$${total.toFixed(2)}`;
}
