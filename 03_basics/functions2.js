// functions

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2))

// yeh aise toh bilkul fine work kar rha hai for 1 value as it is having only one argument
// but
// hume pata hai ki 1 person cart ke andar kitni bhi values add kar skta hai


function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2,50)) // it will calculate the first value only

// so agar hume sari values include karni hai toh hum spread operator ka use karte hai


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2,50,500,7000))  // now it will work as an array and print all the values added by user


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