// primitive datatypes

//7 types : string , number, boolean, null, undefined, symbol,bigint 


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


const bigNumber = 13846397059524723073788n




// reference or non primitive types

// array, objects, functions 

const heros = [ "shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Hemant",
    age: 25,
}

//  const myFunction(){
//     console.log("Hello World");
//  }

 //console.log(typeof bigNumber);



 //======================

 // stack(), heap()

 // stack (primitive data type)  :- stores  primitive data types of memory 
 //heap(non-primitive type ) :- stores non primitive data types of memory


let myYoutubename = "hemantdohare"
let anothername= myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@gmail.com"

}

let userTwo = userOne

userTwo.email = "hemant@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);
