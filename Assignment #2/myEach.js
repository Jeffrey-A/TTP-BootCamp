let x = [1,2,3];

const myEach = (arr, callback) => {

    for(let i = 0; i< arr.length; i++ ){
         callback(arr[i]);
    }
}

function test(e){
    console.log(e*2);
}

console.log(myEach(x, test))