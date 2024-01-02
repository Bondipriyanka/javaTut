//singleton 
//object literals

const mySym = Symbol("key1")
const JsUser ={
    name: "Priya",
    "full name": "Priyanka",
    [mySym]: "mykey1",
    age : 19,
    location: "vizag",
    email: "priya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "sweety@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "sweety@gvp.com"
console.log(JsUser);

//functions are added.
JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




