const myEvery = (arr, callback) =>{

    for(let i=0; i < arr.length; i++){
        if(!callback(arr[i])){
            return false; 
        }
    }

    return true;
};

let x =[1,2,3,4];

console.log("JS Every");
let b = x.every( item => item >0);
console.log(b);

console.log("myEvery");
let a = myEvery(x,  item => item> 0);
console.log(a);