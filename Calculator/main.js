let button = document.querySelectorAll("#keyboard > div")
let display = " ";

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {

        let usertype = button[i].innerText;

        if (usertype == "=") {
            display = eval(display);
        }
        else if (usertype == "C") {
            display = "";
        }
        else {
            display += usertype;
        }
        document.getElementById("display").innerText = display
    })
}