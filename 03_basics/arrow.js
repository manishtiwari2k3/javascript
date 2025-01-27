// this keyword

// whenever we are referring to the current context then we use this keyword

const user = {
    name : "manish",
    age : 21,

    welcomeMessage : function(){
        console.log(`${this.name} , is logged in`)
        // console.log(this) //this talks about the current context only
    }
}

user.welcomeMessage()

user.name = "mannu" // yha par value change ho jayegi kuki this keyword se humne context lia hai koi specific value nahi li

user.welcomeMessage()
// yha par user ke scope ke andar jitne bhi variables hai unko access karne ke liye hum this keyword ka use karte hain

// lekin agar hum object ke bahar this keyword ka use karte hain toh vha bhi toh current context hoga kuch toh we have to find
// ki vaha current context hai kya



console.log(this)

// jab hum object ke andar this ko call karrahe the toh vo current context ko call kar raha tha jo ki object tha
// but
// jab hum object kr bahar this ko call kar rahe hai toh vha par jo current context hai vo node hai
// toh isilie vo current object ko point karra hai jo ki empty hai koi object hi nahi hai

// jab hum browser ke andar karte hain
// console.log  toh vaha pe window object aata hai context mai

// current context mai tabi toh hum window ki functionality use kar pate hai like click alert etc

function coffee(){
    name : "manish"
    console.log(this.name)  // this will give us undefined value
}

coffee()

// ye hume undefined value dega aur kyu
// kyuki this keyword jo hota hai vvo current context of object ko hi point karta hai
// aur in this case this keyword 1 functuion ke nadar se call karne ke lie use kia jara hai
// thats why ye jo hota hai vo only objects ke lie accessible hota hai
// not for the functions 

// we can access only the context of objects with the help of this 
// we cant access functions or context of functions with the help of this as it will give us undefined

// another way of declaring a function

const paneer = function(){
    name : "manish"
    console.log(this.name) // also give undefined as we have studied
}

paneer()

// arrow function ***********************************************

const matarpaneer = () => {
    name : "manish"
    console.log(this.name)
}

matarpaneer()


// basic syntax of arrow function is

// () => {}

const add = (num1, num2) => {
    return num1+num2
}

const c = add(5,7)

console.log(c)



// important *************************


const sub = (a , b) => { return a-b}// agar curly braces ke andar likhre hai toh return likhna padega //explicit return

console.log(sub(7,5))

// but agar normal braces ,mai likhre hai toh return likhe bina bhi chl jaega

// we will use this mostly in react

const multi = (m , n) => (m*n)  //implicit return
console.log(multi(5,2))



// but hume jab bhi object return karvane hai toh vo simple braces se return nahi ho sakte kabhi bhi
// we have to include curly braces for returning the objects

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()