// Exercise 4

let password = document.getElementById("passw");
let submit = document.getElementById("logIn");
let heading = document.getElementById("heading")

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if(password.value != "12345678"){
        heading.innerText= "Log In";
        alert("Incorrect Password");
    }else{
        heading.innerText = "Hacked";
    }
    
});


