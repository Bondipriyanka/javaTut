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

const dd=['priya', 143]
const dr={"priy":90, 'uiu':"uiu"} // dictionary in py, json datatype

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



// *******************************************
// stack (primitive), heap (non primitive)
let  mygithubname = "Priyanka"
let anothername = mygithubname
 anothername = "Sweety"
console.log(anothername);
console.log(mygithubname);

let userOne= {
    email : "user@gmail.com",
    upi:"user@ybl"

}
let usertwo= userOne

usertwo.email = "priya@google.com"
console.log(userOne.email);
console.log(usertwo.email);
    