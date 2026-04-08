const user = {
    username: "hemant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username ="hem"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username= "hemant"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "hemant"
//     console.log(this.username);

// }
//chai()

const chai =  () => {
    let username = "hemant"
    console.log(this);

}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)

// const addTwo = (num1, num2) => {username: "hemant"}  // will not defined

const addTwo = (num1, num2) => ( {username: "hemant"})

console.log(addTwo (3,4))


//const myArray = [ 2,3,4,6,1]

// myArray.forEach()