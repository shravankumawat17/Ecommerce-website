

const categoryContainer = document.getElementById("category-container");
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");

const bannerTitle = document.getElementById("banner-title");
const bannerSubtitle = document.getElementById("banner-subtitle");



const categoryImages = {

    "SUNSCREEN":"images/product 3.png",

    "SERUM":"images/product 4.png",

    "FACE CLEANSER":"images/product 1.png",

    "FACE WASH":"images/product 5.png"

};


const categoryColors = {

    "SUNSCREEN":"#FFD6A5",

    "SERUM":"#D8B4FE",

    "FACE CLEANSER":"#BFDBFE",

    "FACE WASH":"#BBF7D0"

};



const categories = ["ALL", ...new Set(products.map(product=>product.type))];


categories.forEach((category,index)=>{

    const card = document.createElement("div");

    card.className = "category-card";

    if(index===0){

        card.classList.add("active");

    }

    if(category==="ALL"){

        card.innerHTML = `

        <div class="category-circle"

        style="background:#F3F4F6;">

        <i class="fa-solid fa-layer-group"

        style="font-size:34px;color:#2F5D50;"></i>

        </div>

        <h3>All</h3>

        `;

    }

    else{

        card.innerHTML = `

        <div

        class="category-circle"

        style="background:${categoryColors[category]};">

        <img src="${categoryImages[category]}">

        </div>

        <h3>${category}</h3>

        `;

    }

    card.addEventListener("click",()=>{

        document.querySelectorAll(".category-card")

        .forEach(button=>button.classList.remove("active"));

        card.classList.add("active");

        if(category==="ALL"){

            bannerTitle.textContent="All Products";

            bannerSubtitle.textContent="Explore our complete skincare collection.";

            displayProducts(products);

        }

        else{

            bannerTitle.textContent=category;

            bannerSubtitle.textContent=`Best Selling ${category.toLowerCase()} products`;

            const filteredProducts=

            products.filter(product=>product.type===category);

            displayProducts(filteredProducts);

        }

    });

    categoryContainer.appendChild(card);

});


function displayProducts(productList){

    productGrid.innerHTML="";

    productList.forEach(product=>{

        const card=document.createElement("div");

        card.className="product-card";

        card.innerHTML=`

        <img src="${product.image}">

        <div class="product-info">

        <div class="product-type">

        ${product.type}

        </div>

        <div class="product-title">

        ${product.title}

        </div>

        <div class="product-price">

        ₹${product.price}

        <span>

        ₹${product.oldPrice}

        </span>

        </div>

        <button

        class="view-btn">

        View Product

        </button>

        </div>

        `;

        card.addEventListener("click",()=>{

            localStorage.setItem("selectedProduct",product.id);

            window.location.href="product.html";

        });

        productGrid.appendChild(card);

    });

}

searchInput.addEventListener("keyup",()=>{

    const value=

    searchInput.value.toLowerCase();

    const filtered=

    products.filter(product=>

        product.title.toLowerCase().includes(value)

    );

    displayProducts(filtered);

});


displayProducts(products);