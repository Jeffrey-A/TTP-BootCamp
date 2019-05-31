
const mySome = (arr, callback) =>{

    for(let i=0; i < arr.length; i++){
        if(callback(arr[i])){
            return true; 
        }
    }

    return false;
};

let x =[1,2,3,4];

console.log("JS Some");
let a = x.some( item => item<2);
console.log(a);

console.log("mySome");
let b = mySome(x,  item => item<2);
console.log(b);