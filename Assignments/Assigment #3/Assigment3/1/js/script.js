//Exercise 1
let text = document.getElementById("text-field")
let right = document.getElementById("right");
let notRight = document.getElementById("not-right");

right.addEventListener("click", ()=>{
    text.innerHTML ="<h1 class='right'>I am right</h1>";
});

notRight.addEventListener("click", ()=>{
    text.innerHTML ="<h1  class='not-right'>No, I am right</h1>";
});