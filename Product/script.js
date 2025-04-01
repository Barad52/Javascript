let products = JSON.parse(localStorage.getItem('products')) || [];
displayProducts();

document.getElementById('addProductBtn').addEventListener('click', addProduct);

function addProduct() {
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const category = document.getElementById('category').value;

    if (!title || !price) {
        alert('enter price and title');
        return;
    }

    const product = { id: Date.now(), title, price, image, category };
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    displayProducts();
    clear();
}

function displayProducts() {
    const mainSection = document.getElementById('products');
    mainSection.innerHTML = '';

    products.forEach(product => {
        mainSection.innerHTML += ` 
            <div class="product-item" id="product-${product.id}">
                <img src="${product.image}">
                <div>
                    <strong>${product.title}</strong>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                </div>
                <div>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </div>
        `;
    });

    updateCategoryFilter();
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    const newTitle = prompt('Update title', product.title);
    const newPrice = prompt('Update price', product.price);
    const newCategory = prompt('Update category', product.category);

    if (newTitle && newPrice && newCategory) {
        product.title = newTitle;
        product.price = newPrice;
        product.category = newCategory;

        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
    }
}


function filterCategory() {
    const category = document.getElementById('filterCategory').value;
    const filteredProducts = category ? products.filter(product => product.category === category) : products;
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const mainSection = document.getElementById('products');
    mainSection.innerHTML = '';

    filteredProducts.forEach(product => {
        mainSection.innerHTML += `
            <div class="product-item">
                <img src="${product.image}" alt="${product.title}">
                <div>
                    <strong>${product.title}</strong>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                </div>
                <div>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </div>
        `;
    });
}

function sortPrice() {
    const sortType = document.getElementById('sort').value;
    if (sortType === 'low-high') {
        products.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
        products.sort((a, b) => b.price - a.price);
    }
    displayProducts();
}

function clear() {
    document.getElementById('title').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
    document.getElementById('category').value = '';
}

function updateCategoryFilter() {
    const categories = [...new Set(products.map(product => product.category))];
    const filterCategory = document.getElementById('filterCategory');
    filterCategory.innerHTML = '<option value="">Filter Category</option>';

    categories.forEach(category => {
        filterCategory.innerHTML += `<option value="${category}">${category}</option>`;
    });
}
