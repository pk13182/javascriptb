let somenumber=67
let stringnumber=String(somenumber)
// console.log(stringnumber)
let num=1
let bool=String(num)
// console.log(bool)


/*
1=>true  0=>false
""=>false
"paklu"=>true

While conversion of one datatype from other sometimes it is converted but it has no any value in that datatypes so be careful
for examples:
"33abc"=>when converted to Number datatype it gives NaN value .
null =>is converted to number then it gives 0
undefined =>NaN

*/
/*****************OPERATIONS ***********/ 
// console.log(true)
// console.log(+true)
// console.log(+"")

// console.log(1+"2"+3)
// console.log("1"+2+3)
// console.log(1+2+"3")
/*

These types of ques can be asked in interviews only no usage in project building
 */


/* *********Comparisons****** */
 
console.log("2">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)
/*== and >or>= working process is different so unlikely ther results will not be consistent owith each other */
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)
/*=== checks value +datatype also */
console.log("0"===0)
 