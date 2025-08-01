let cart = [];

const products = {
    "Eclipse Tee": 299,
    "Lunar Fade Tee": 249,
    "Zero Zone Tee": 399
};

function updateCartDisplay() {
    document.getElementById("cart-count").textContent = cart.length;
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name} - ₹${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const productCard = event.target.closest(".product");
        const name = productCard.querySelector("h3").innerText;

        cart.push({ name: name, price: products[name] });
        updateCartDisplay();
        alert(`${name} has been added to your cart!`);
    });
});

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "payment.html";
});