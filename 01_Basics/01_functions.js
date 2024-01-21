
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");

}
//sayMyName()

//function addTwoNumbers(number1 ,number2){
  //  console.log(number1 + number2);
//}

function addTwoNumbers(number1 ,number2){

   // let result = number1 + number2
    //return result
    return number1 + number2

}

const result = addTwoNumbers(3,5)

console.log("Result:",result);


function loginUserMessage(username = "sweety"){
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
 //console.log (loginUserMessage ("Priya"))
 console.log (loginUserMessage ("Priya"))