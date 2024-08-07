// Singleton object
//Object.create    // like this using constructor u can create singleton objects

//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "12Abc";
tinderUser.name = "Kumar";
tinderUser.isLoggedIn=  false;

//console.log(tinderUser);

const regularUser = {
    emails: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Vishal",
            lastname: "shukla"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2);
//const obj4 = Object.assign({}, obj1, obj2, obj5);
//console.log(obj3);

const spread = {...obj1, ...obj2, ...obj5}
//console.log(spread);

const user = [
    {
        id: 1,
        email: "dd@gmai.com"
    }
]


//console.log(user[0].email);
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "99",
    courseInstructor: "vishal"
}

//course.courseInstructor 
const {courseInstructor: instructor} = course
//console.log(courseInstructor);
//console.log(instructor);

//JSON 
// {
//     "name": "vishal",
//     "myAge": "30",
//     "price": "999"
// }



