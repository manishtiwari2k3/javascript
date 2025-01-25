// const tinderUser = new Object()
// this is the way of creating a tinder object

const tinderUser = {}

tinderUser.name = "Sammy"
tinderUser.age = 21
tinderUser.loggedIn = false

// console.log(tinderUser)

const user = {
    email : "manishtiwari2k3@gmail.com",
    name : "sammy" , 
    newUser : {
        name : "vishal",
        username : {
            firstname : "manish",
            lastname : "tiwari"
        }
    }
}

// console.log(user.newUser.username?.firstname)
// // this question mark is used to check whether this value is present in the object or not if not then it automatically looks
// // for the next value


const ob1 = {1 : "a" , 2: "b"}
const ob2 = {3 : "a" , 4: "b"}

// const c = {ob1 , ob2}
// ye actual mai values ko combine nahi karta balki ye kya karta hai ki dono objects ko 1 sath likh deta hai same like arraya
// so if we have to combine it then

// we should use assign

// const c = Object.assign(ob1 , ob2)
// this is the correct way to do so but here also there is a problem in the syntax 

// we have to pass a parenthesis inside it also

// const c = Object.assign({} , ob1 , ob2)

// console.log(c)

// // now this is the correct approach to do so

// but we also dont use it mostly   
// we use spread operator mostly

const c = {...ob1,...ob2}
// same goes with the addition of arrays
// same aise hi arrays ke saath bhi hoega this is new and easy way of doing this

console.log(c)


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]