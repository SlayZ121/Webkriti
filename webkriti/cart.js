const cart = [];


function addToCart(product) {
    cart.push(product);
    updateCart();
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";

    cart.forEach((product, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <p>${product.name}</p>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart-button")) {
        const productId = parseInt(event.target.getAttribute("data-product-id"));

        if (!isNaN(productId)) {
            addToCart(productId);
        }
    }
});






