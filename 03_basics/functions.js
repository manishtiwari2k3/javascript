// console.log("M")
// console.log("A")
// console.log("N")
// console.log("I")
// console.log("S")
// console.log("H")

// functions are basically used to make our work easy
// functions ke sath sath hum js mai memory management bhi seekhenge
// memory management is not that much complex in js like c++ etc.

// we can declare function in javascript using the using function keyword

function myName(){
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("S")
    console.log("H")
}

// myname -> this is the reference of the above function

// myName() // this is the calling of the above function

function add2num(num1 , num2){
    console.log(num1+num2)
}

// add2num() // this will say not a number NaN

add2num(5 , 7)

// jab hum function ko banate hai tab uske andar jo values pass karte hain unki hum bolte hai parameters
// but
// jab hum functions ko call karate hai tab jo uske andar hum values pass karte hai use hum bolte hai arguments

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage()) // jab hum aise hi kuch bhi nahi pass karte function ke parameter mai then usse hume undefined value
// milti hai


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));