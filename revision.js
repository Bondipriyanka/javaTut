pri=20
var pri=40
console.log(pri)

/*
dynamic datatypes/primitive or non primtive data types/hoisting
c, java, c++ -> need to define data types(compiler)
py, js -> dynamic, scripting languages (interpreter)
*/


/*
// you have to show the img status in my application with respective to my id/number

const request = {
    "userid":"5346578",
    "name":"priya"
}

const response={
    "status":true,
    "data":[
        {"id":"1","name":"John"},
        {"id":"2","name":"John2"},
        {"id":"3","name":"John3"},
        {"id":"4","name":"John4"},
        {"id":"5","name":"John5"},
    ],
    "message":"info fetched successful"
}

const response2={
    "status":false,
    "data":[],
    "message":"info fetched unsuccessful"
}
*/


/*

hashmap or hashing table

question 1:
const s="hi hello hi priya good to see u hi sweety"

output: -> hi -> 3, hello -> 1

step 1:
extract  words within the given string

step2:
create a hash table/ object/ dict
first check the key exists or not
if key exists increase count
if key is not present then add key with value 0

*/

const s="hi hello hi priya good to see u hi sweety"
let arr=s.split(" "); //["hi", "hello", "hi", "priya", "good", "to",...]
// console.log(arr)

let i=0
let words=[]
let wordsString=''
for(i=0; i<s.length; i++){
    if(s[i]==" "){
        words.push(wordsString)
        wordsString=''
    }
    else{
        wordsString=wordsString+s[i] // ''+'h' or 'h'+'e'
    }
}
console.log(words)

let items={}

for(i=0; i< words.length; i++){
    // if(words[i] in items){
    //     items[words[i]] = items[words[i]]+1
    // }
    // else{
    //     items[words[i]] = 1
    // }
    items[words[i]] = items[words[i]]+1 || 1
}

console.table(items)

/*

x-> hashvalue(x) -> {hashvalue(x):value}

*/

/*
type casting:
string of number -> number
string of float -> number
string of non numbers -> ascii value
number -> string
float -> number
boolean -> int
int -> boolean
string -> boolean
float -> boolean
null -> 0
undefined -> NaN
*/

let text = String.fromCharCode(77, 85, 65, 65, 65, 72);
console.log(text)
console.log("P".charCodeAt(0))

