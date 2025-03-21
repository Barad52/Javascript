fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        display(data);
    }
    )
    .catch(err => {
        console.log("error")
    })

function display(el) {
    let store = el.map(store => `
        <div id="${store.id}"> </div>
        <h1>${store.title} </h1>
        <p>${store.price} </p>
        <p>${store.description} </p>
        <h2> ${store.category}</h2>
        <img src="${store.image}" </img>
        `).join(" ");

        document.getElementById('container').innerHTML = store
}

