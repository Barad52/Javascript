let form = document.getElementById('signin');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.getElementById('signin-name').value;
    let email = document.getElementById('signin-email').value;
    let password = document.getElementById('signin-password').value;

    let user = {
        name: name,
        email: email,
        password: password
    }

    console.log(user);
})


let data = document.getElementById('signup');

data.addEventListener('submit', (e) => {
    e.preventDefault();
    let upname = document.getElementById('name').value;
    let upemail = document.getElementById('email').value;
    let upcountry = document.getElementById('country').value;
    let upphone = document.getElementById('phone').value;
    let uppassword = document.getElementById('password').value;

    let user1 = {
        upname: upname,
        upemail: upemail,
        upcountry: upcountry,
        upphone: upphone,
        uppassword: uppassword
    }

    console.log(user1);
})
