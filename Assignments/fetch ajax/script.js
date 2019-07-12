let bt = document.getElementById("btn-fetch");

function doit(){
    fetch('https://api.unsplash.com/photos/?client_id=ac0fbe6f5a89856bb61aefb7dacd528283d2c66338cd91c3d9c0be5c0bfdf98a')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //JSON.stringify(myJson)
    console.log(myJson);
  });
}


bt.addEventListener('click', doit)