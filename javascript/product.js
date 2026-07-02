
const cards = document.querySelectorAll(".bestSellers");

if(cards.length > 0){

    cards.forEach(card=>{

        card.addEventListener("click",function(){

            const productId = Number(this.dataset.id);

            localStorage.setItem("selectedProduct",productId);

            window.location.href="product.html";

        });

    });

}





let selectedProduct = null;

let quantity = 1;

if(window.location.pathname.includes("product.html")){

    const selectedId = Number(localStorage.getItem("selectedProduct")) || 1;

    selectedProduct = products.find(product => product.id === selectedId);

    if(selectedProduct){

        document.getElementById("product-image").src = selectedProduct.image;

        document.getElementById("product-type").textContent = selectedProduct.type;

        document.getElementById("product-title").textContent = selectedProduct.title;

        document.getElementById("product-tag").textContent = selectedProduct.tagline;

        document.getElementById("product-reviews").textContent =
        `⭐ ${selectedProduct.rating} (${selectedProduct.reviews} Reviews)`;

        document.getElementById("new-price").textContent =
        `₹${selectedProduct.price}`;

        document.getElementById("old-price").textContent =
        `₹${selectedProduct.oldPrice}`;

        document.getElementById("size1").textContent =
        selectedProduct.size[0];

        document.getElementById("size2").textContent =
        selectedProduct.size[1];

        document.getElementById("product-description").innerHTML =
        selectedProduct.description;

    }

}



const quantityText = document.getElementById("quantity");

const plusBtn = document.getElementById("plus");

const minusBtn = document.getElementById("minus");

if(plusBtn){

    plusBtn.addEventListener("click",()=>{

        quantity++;

        quantityText.textContent = quantity;

    });

}

if(minusBtn){

    minusBtn.addEventListener("click",()=>{

        if(quantity>1){

            quantity--;

            quantityText.textContent = quantity;

        }

    });

}



const addToCartBtn = document.querySelector(".cart-btn");

if(addToCartBtn){

    addToCartBtn.addEventListener("click",()=>{

        // Read old cart

        let cart = JSON.parse(localStorage.getItem("cart")) || [];




        const existingProduct = cart.find(item=>item.id===selectedProduct.id);



        if(existingProduct){

            existingProduct.quantity += quantity;

        }

        else{

            cart.push({

                id:selectedProduct.id,

                quantity:quantity

            });

        }



      

        localStorage.setItem("cart",JSON.stringify(cart));



        alert("Product Added To Cart 🛒");

    });

}
const form = document.getElementById("searchForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    window.location.href = "category.html";
    document.getElementById("searchInput").innerHTML='';

});