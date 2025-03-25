
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

// Problem 1. List of pitches on page load 

// http://localhost:3000/pitches



// ------- Display ------->

let arr = []

function fetchPitches() {
    fetch('http://localhost:3000/pitches')
        .then(res => res.json())
        .then(data => {
            display(data);
            arr = data
        })
        .catch(err => {
            console.log("error", err);

        })
}

function display(el) {
    let store = el.map(pitch =>
        `<div class="card-body">
        <a href="description.html?title=${encodeURIComponent(pitch.title)}&image=${encodeURIComponent(pitch.image)}&founder=${encodeURIComponent(pitch.founder)}&category=${encodeURIComponent(pitch.category)}&price=${encodeURIComponent(pitch.price)}">
            <h4 class="card-title">${pitch.title}</h4>
            <div class="card-img">
                <img src="${pitch.image}" alt="pitch">
            </div>
            <p class="card-founder"><strong>Founder:</strong> ${pitch.founder}</p>
            <p class="card-category"><strong>Category:</strong> ${pitch.category}</p>
            <p class="card-price"><strong>Price:</strong> ₹${pitch.price}</p>
        </a>
        <div class="card-actions">
            <button data-id="${pitch.id}" class="card-link">Edit</button>
            <button data-id="${pitch.id}" class="card-button">Delete</button>
        </div>
    </div>`
    ).join("");

    mainSection.innerHTML = store;
}
fetchPitches();
// ------- Add Pitch ------->    


pitchCreateBtn.addEventListener("click", () => {

    let addpitch = {
        title: pitchTitleInput.value,
        image: pitchImageInput.value,
        category: pitchCategoryInput.value,
        founder: pitchfounderInput.value,
        price: pitchPriceInput.value
    };

    fetch('http://localhost:3000/pitches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addpitch),
    })
        .then(res => res.json())
        .then(data => alert('Data Added Successfully', data))
        .catch(error => console.error('Error:', error));
})


// ------- Delete Pitch ------->


document.addEventListener('click', (e) => {

    if (e.target.classList.contains('card-button')) {
        deletefun(e.target.dataset.id)
    }
})


function deletefun(id) {

    fetch(`http://localhost:3000/pitches/${id}`, {
        method: 'DELETE',
    }).then((res) => res.json())
        .then((data) => alert('Data Deleted Successfully', data))
        .catch((err) => console.log(err))

}


// ------- Filter Category ------->


filterFood.addEventListener('click', () => {
    let FoodData =
        arr.filter((el) => {
            return el.category == "Food"
        })
    display(FoodData);
})

filterElectronics.addEventListener('click', () => {
    let ElectronicData = arr.filter((el) => {
        return el.category == "Electronics"
    })
    display(ElectronicData);
})

filterPersonalCare.addEventListener('click', () => {
    let PersonalCareData = arr.filter((el) => {
        return el.category == "Personal Care"
    })
    display(PersonalCareData);
})

// ------- Filter Price ------->

sortAtoZBtn.addEventListener('click', () => {
    let LowToHigh = arr.sort((a, b) =>
        a.price - b.price);
    display(LowToHigh);
})

sortZtoABtn.addEventListener('click', () => {
    let HighToLow = arr.sort((b, a) =>
        a.price - b.price);
    display(HighToLow);
})

// ------- Update Pitch ------->

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-link')) {
        updateData(e.target.dataset.id)
    }
})

function updateData(id) {
    fetch(`http://localhost:3000/pitches/${id}`)
        .then((res) => res.json())
        .then((data) => {
            updatePitchIdInput.value = data.id,
                updatePitchTitleInput.value = data.title,
                updatePitchImageInput.value = data.image,
                updatePitchfounderInput.value = data.founder,
                updatePitchCategoryInput.value = data.category,
                updatePitchPriceInput.value = data.price
        }
        )
}

updatePitchBtn.addEventListener('click', (e) => {

    let updateValue = {
        id: updatePitchIdInput.value,
        title: updatePitchTitleInput.value,
        image: updatePitchImageInput.value,
        founder: updatePitchfounderInput.value,
        category: updatePitchCategoryInput.value,
        price: updatePitchPriceInput.value,
    }

    fetch(`http://localhost:3000/pitches/${updateValue.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateValue)
    }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

})

// // ------- Update Price ------->

document.addEventListener('click', (e) => {

    if (e.target.classList.contains('card-link')) {
        updatePrice(e.target.dataset.id)
    }
})

function updatePrice(id) {

    fetch(`http://localhost:3000/pitches/${id}`)
        .then((res) => res.json())
        .then((data) => {

            updatePricePitchId.value = data.id,
                updatePricePitchPrice.value = data.price

        })
}


updatePricePitchPriceButton.addEventListener('click', (e) => {

    let pricevalue = {

        id: updatePricePitchId.value,
        price: updatePricePitchPrice.value

    }

    fetch(`http://localhost:3000/pitches/${pricevalue.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pricevalue)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

})