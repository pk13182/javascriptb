// Primitive

// 7 Types: String,Number,Undefined,Null,Boolean,BigInt,Symbol


// Reference(Non Primitive)
// Types: Function,object,Array

let temperature=null
console.log(typeof(temperature));
    

const id= Symbol('145')
const idd= Symbol('145')
console.log(id===idd);


const heros=["shaktiman","nagaraj","doga"]
let myObj={
    name:"Pk",
    age:20
}

const myFunc=function(){
   console.log("hello World");
   
}
console.log(myFunc);   
console.log(typeof myFunc);   


/* ++++++++++++++++++++++++++++++++++++++++++++++++ */
// Stack(Primitive)    Heap(Non-Primitive)
// Call by value
let datafirst=345
let datasecond=datafirst
datasecond=5567
console.log(datafirst)
console.log(datasecond)
//  Call by Reference
let userOne={
    email:"user@gmail.com" ,
Upi:"3364y@sbi"
}
let userSecond=userOne
userSecond.email="pk@gmail.com"
console.log(userOne)
console.log(userSecond)