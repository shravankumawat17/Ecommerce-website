

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");

const totalItems = document.getElementById("total-items");

const totalPrice = document.getElementById("total-price");




function displayCart(){

    cartContainer.innerHTML = "";

    // Empty Cart

    if(cart.length === 0){

        cartContainer.innerHTML = `

        <div class="empty-cart">

            <h2>Your Cart is Empty</h2>

            <p>Add some amazing products to your cart.</p>

            <a href="index.html">Continue Shopping</a>

        </div>

        `;

        totalItems.textContent = "0";

        totalPrice.textContent = "₹0";

        return;

    }


    let items = 0;

    let grandTotal = 0;


    cart.forEach(cartItem=>{

        // Find Product

        const product = products.find(p=>p.id===cartItem.id);

        if(!product) return;


        const subtotal = product.price * cartItem.quantity;

        items += cartItem.quantity;

        grandTotal += subtotal;


        cartContainer.innerHTML += `

        <div class="cart-card">

            <img src="${product.image}">

            <div class="cart-details">

                <h2>${product.title}</h2>

                <p>${product.tagline}</p>

                <div class="cart-price">

                    ₹${product.price}

                </div>

                <div class="quantity">

                    <button onclick="decreaseQuantity(${product.id})">-</button>

                    <span>${cartItem.quantity}</span>

                    <button onclick="increaseQuantity(${product.id})">+</button>

                </div>

                <div class="subtotal">

                    Subtotal : ₹${subtotal}

                </div>

                <button
                    class="remove-btn"
                    onclick="removeProduct(${product.id})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });


    totalItems.textContent = items;

    totalPrice.textContent = `₹${grandTotal}`;

}



function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

}




function increaseQuantity(id){

    const product = cart.find(item=>item.id===id);

    product.quantity++;

    saveCart();

    displayCart();

}




function decreaseQuantity(id){

    const product = cart.find(item=>item.id===id);

    product.quantity--;

    if(product.quantity<=0){

        cart = cart.filter(item=>item.id!==id);

    }

    saveCart();

    displayCart();

}




function removeProduct(id){

    cart = cart.filter(item=>item.id!==id);

    saveCart();

    displayCart();

}

// document.getElementById("payment").addEventListener("clicks",function(){

// })



displayCart();