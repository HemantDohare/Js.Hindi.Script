const name = "hemant"
const repoCount = 50

//console.log(name + repoCount +"Value");

console.log(`hello my nae is ${name} and my repo count is ${repoCount}`);

const gameName = new String (`Hemantdohare`)

//console.log(gameName[1]);
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase ());
console.log(gameName.charAt(3));
console.log(gameName.indexOf(`m`));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-5,4)
console.log(anotherString);


const newStringOne = "   hemant  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:hitesh.com/hitesh%20chaoudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));


console.log(gameName.split ('-'));
