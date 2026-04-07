"use strict" // treat all js code as newer version of js

//alert(3 + 3)// we are using nodejs not brower so alert is not defined

console.log(3  
    +  3); // this is also valid code in js but code readibility is very bad so avoid it and write code in proper way 

console.log("Hemant")    


let name= "Hemant"
let age= 22
let isLoggedIn= false

//number => 2 to the power 53
//bigint => more than 2 to the power 53
// string => "Hemant" 'Hemant' `Hemant`
//boolean => true or false
// null => standalone value that represents nothing
// undefined => variable that is not assigned a value yet
// symbol => unique identifier



//objects => key value pair data structure


console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isLoggedIn) //boolean
console.log(typeof null) //object (this is a bug in js but we can not change it because of backward compatibility)
console.log(typeof undefined) //undefined