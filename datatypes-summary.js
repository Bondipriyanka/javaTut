// primitive

// 7 types : string,Number , Boolean , null , undefined , symbol, Bigint
//=>JavaScript is a dynamically typed language, 
//  which means that data types of variables are determined
//  by the value they hold at runtime and can change throughout the program as we assign different values to them.
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

//const bigNumber = 233455756899765443n

//Refernce type (Non primitive)
// Array , objects, Functions key value pairs , curly braces kay andar objects rahithi hein.

const heros = ["shaktiman","doga"];
let myObj = {
    name: "Priya",
    age : 22,
}

// function declartion
const myFunction = function(){
    console.log("Hello Priya")

}
console.log(typeof anotherId);