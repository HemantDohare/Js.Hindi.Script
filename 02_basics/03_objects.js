// singleton
//object.create

//object literals


const mySym = Symbol("key1")



const Jsuser = {
    name: "Hemant",
    "full name": "Hemant Dohare",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hemantdohare30@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "hemant@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email= "hemant@microsoft.com"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS User");

}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user,${this.isLoggedIn}`);
}
console.log(Jsuser.greeting);
console.log(Jsuser.greetingTwo());