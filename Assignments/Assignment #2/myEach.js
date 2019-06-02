

const myEach = (arr, callback) => {

    for(let i = 0; i< arr.length; i++ ){
         callback(arr[i]);
    }
}

//Testing
let x = [1,2,3];
function test(e){
    console.log(e*2);
}

myEach(x, test);