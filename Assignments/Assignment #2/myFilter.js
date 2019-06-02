const myFilter = (arr, callback) => {
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){

            newArr.push(arr[i]);
        }
    }
    return newArr;

};

//Testing
let x = [1,2,3,4];

console.log("JS Filter");
let z = x.filter( (item ) => {return item < 3})
console.log(z);

console.log("myFilter");
let y = myFilter(x,  (item ) => {return item < 3})
console.log(y);