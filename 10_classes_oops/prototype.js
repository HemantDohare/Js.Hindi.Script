// let myName = "hemant          "
// let myChannel = "chai   "

// console.log(myName.trueLength());


let  myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${ this.spiderman}`);
    }
}

Object.prototype.hemant= function(){
    console.log(`hemant is present in all objects`);

}
Array.prototype.heyHemant = function(){
    console.log(`Hemant says hello`);
}
//heroPower.hemant()
//myHeros.hemant()
//myHeros.heyHemant()
//heroPower.heyHemant()

// inheritance

const User = {
    name: "hemu",
    email: "hemant@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS  assignment',
    fullTIme: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//morder syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Aarti    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
} 

anotherUsername.trueLength()
"hemant".trueLength()
"iceTea".trueLength()