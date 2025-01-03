const number=400
console.log(number)
const anothernumber=new Number(10000000)
console.log(anothernumber);
console.log(anothernumber.toString().length);
console.log(anothernumber.toFixed(4));
console.log(anothernumber.toPrecision(2));
console.log(anothernumber.toLocaleString());
/* Using 'en-IN' in the to localstring function can gives values as per Indian norms. */
/* ++++++++++++++++++Maths++++++++++++++++ */
console.log(Math);
console.log(Math.abs(-43));
console.log(Math.ceil(7.8));
console.log(Math.floor(45.7));
console.log(Math.min(3,45,6,7));
console.log(Math.random());
console.log(Math.random()*10);
const min=45;
const max=77
console.log(Math.floor(Math.random()*(max-min+1))+min);
/* This is  an important expression=>that generates an integer in between the given min and max (a random integer)  */