// Exercise 6

let display = document.getElementById("display");


let submit = document.getElementById("btn");


submit.addEventListener('click', (e) => {
    e.preventDefault();

    let radius = parseInt(document.getElementById("usern").value);
    
    let volume  = (4.0/3) * Math.PI * (radius * radius * radius); 
    if(volume){
        display.innerText = "V = " + volume.toFixed(2);
    }else{
        alert("Invalid Input");
    }
    

    
    
});


