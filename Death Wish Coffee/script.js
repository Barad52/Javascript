let URL = "http://localhost:3000/newproducts";
let newProduct = document.getElementById("new-product");

function fetchProduct() {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            display(data);
        })
        .catch(err => {
            console.log("Error fetching products:", err);
        });
}

function display(products) {
    newProduct.innerHTML = "";

    let store = products.map(product => {
        let oldPrice = product.oldPrice || product.price + 10;  // Old price logic

        return `
        <div class="col-md-3 mb-4">
            <div class="product-card">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-body">
                    <h5 class="product-title">${product.title}</h5>
                    <p class="product-price">
                        <span class="old-price">$${oldPrice.toFixed(2)}</span>
                        <span class="new-price">$${product.price.toFixed(2)}</span>
                    </p>
                </div>
                <div class="product-actions">
                    <button class="product-btn">
                        ADD TO CART <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join("");

    newProduct.innerHTML = store;
}

fetchProduct();
