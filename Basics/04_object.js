//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sweety"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    emial: "pinky@gmail.com",
    fullname:{
        userfullname: {
            firstName:"Pinky",
            lastName: "Floyd"
        }
    }

}
//console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}


//const obj3 = { obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = { ...obj1,...obj2}

//console.log(obj3);
const users = [
    {
    },
        {
        },
       {

       }, 
]
users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


/*************destructure********************/
const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
//course.courseInstructor
const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

//{
   // "name":"Priya",
    //"coursename":"js in hindi",
    //"price ": "free"
//}





