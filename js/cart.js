const inputFieldById = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    inputField.value = '';
    return inputFieldText;
}

const addToCart = () => {
    const product = inputFieldById('product-field');
    const quantity = inputFieldById('quantity-field');
    console.log(product, quantity);
    displayProduct(product, quantity);
    savedCartToLocalStorage(product, quantity);
}

// parse the value from localStorage
const getCartItemFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

// set the value to localStorage
const savedCartToLocalStorage = (product, quantity) => {
    const cart = getCartItemFromLocalStorage();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);

}

const displayProduct = (product, quantity) => {
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ulContainer.appendChild(li);
}

const setTheDisplayFromLocalStorage = () => {
    const cart = getCartItemFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        displayProduct(product, quantity);
    }
}
setTheDisplayFromLocalStorage();