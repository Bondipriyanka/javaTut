const name = "Priya"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("Sweety")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "     Priya   "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "http://google.com/priya%20sweety"

console.log(url.replace('%20','-'));

console.log(url.includes('priya'))

console.log(gameName.split('-'));
