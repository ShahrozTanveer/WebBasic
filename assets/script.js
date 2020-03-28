// Data types in JavaScript
// string
// Numbers 
// Boolean 
// Array 
// Objects 
// null 
// undefined 
// function
// symbols

const str = "this is a string"
console.log(str)
let x=1
let y=2
let number= x+y 
console.log(number);


//if conditions
let n =10
let n2= 20
if(n==n2){
    console.log("true");
}
else{
    console.log("false");
}

if(n!=n2){
    console.log("true");
}
else{
    console.log("false");
}

let i=10
let j="10"
if(i==j){
    console.log("true");
}
else{
    console.log("false");
}

if(i===j){ //===
    console.log("true");
}
else{
    console.log("false");
}
// check data types

console.log(typeof(i));
console.log(typeof(j));

console.log(typeof(git)); //undefined

for (let k = 0; k <10;k++){
    console.log(k);
}

let base=2
let exp=3

console.log(base**exp);//2^3 => 8

//arrays


let arr=[1,2,3,4,5]

console.log("this is array");
for (let k = 0; k <arr.length;k++){// traditional for loop
    console.log(arr[k]);
}
console.log("foreach");
arr.forEach(function(e){
console.log(e);
})

// python
// for e in arr:
//     print(e)