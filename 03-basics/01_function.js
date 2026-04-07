function sayMyName(){
    //console.log("h");
    //console.log("e");
    //console.log("m");
    //console.log("u");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1,number2){
     
//    let result = number1 + number2
  //  return result
   return number1 + number2

}

const result = addTwoNumbers(3,5)

//console.log("Result:", result);


function loginUserMessage(username = dohare){
    //if (username === undefined){
    if(!username){ 
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hemant"));

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400,1000))

const user = {
    username: "hemant",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "aman",
    price:999
})



const myNewArray = [ 200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));