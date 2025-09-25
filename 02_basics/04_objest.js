// const tindeUser = new Object()
const tinderUser = {
}
tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const user = {
    email: "Suma@gmail.com",
    fullname: {
        userfullname : {
            firstname : "hitesh",
            lastname: "Chaoudary"
        }
    }
}
// console.log(user.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4:"b"}
// const obj3= {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2) // Object.assign( target, sources);//
const obj3 = {...obj1, ...obj2}; // spread operator
// console.log(obj3);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
        coursename: "js in hindi",
        price : "9999",
        courseInstructor: "hitesh"
}

const {courseInstructor: intructor} = course;
console.log(intructor);