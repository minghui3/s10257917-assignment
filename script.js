// script.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, itemPrice) {
    const cartItem = { name: itemName, price: itemPrice };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${itemName} to the cart!`);
}

function goToCheckout() {
    console.log(cart);
    const formattedCart = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join('<br>');
    document.getElementById('cart-items').innerHTML = formattedCart;

    window.location.href = 'checkout.html';
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart'); 
    document.getElementById('cart-items').innerHTML = '';
    alert('Cart cleared!');
}
