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
//objects
let obj= {
    name: "abdullah",
    age:21
}

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
// ==  checks values not data types
let i=10 
let j="10"
console.log("checking type");
console.log(typeof(i));
console.log(typeof(j));



if(i==j){
    console.log("true ==");
}
else{
    console.log("false");
}

if(i===j){ //===
    console.log("true ===");
}
else{
    console.log("false ===");
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


function addTwoNumbers(a,b){
    return a+b
}



let number1=4;
let number2=5;
let retNumber=addTwoNumbers(number1,number2)
// alert(`number a is ${number1} and b is ${number2} and result is ${retNumber}`) // Template string

const valueOfPi = Math.PI
console.log(valueOfPi);
console.log(Math.min(1,20,4));


// console.log("foreach");
// arr.forEach(function(e){
// console.log(e);
// })
 

// python
// for e in arr:
//     print(e)


//dom 
function buttonPressed(){
    console.log("you pressed button")
    alert("hey there.")
}
const target = document.querySelector("body > div.content > a") 

target.addEventListener('click', buttonPressed)
let flag= true
function headerClicked() {

    const e= document.querySelector("body .content h1")
    if(flag){
    e.innerHTML="This is Header"
    e.style.backgroundColor="#eee"
    flag=false
    }
    else {
        e.style.backgroundColor="rgb(66, 62, 62)"
        e.innerHTML="This is H1"
        flag=true
    }
}

const header_element= document.querySelector("body .content h1")
header_element.addEventListener('click',headerClicked )

