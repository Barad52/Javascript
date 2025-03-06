// problem8

let details = {
    name: "Chunnu",
    age: 25,
    phone: 9988776645,
    address: {
      city: "New Delhi",
      locality: "Kamla Nagar",
      pin: "115567",
      user_hobbies: ["coding", "biking", "movies"]
    }
  };
  
  for (let i = 0; i <= details.address.user_hobbies.length - 1; i++) {
    console.log(details.address.user_hobbies[i])
  }