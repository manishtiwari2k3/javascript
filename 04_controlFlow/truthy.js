// truthy and falsy statements

// kuch aisi statements bhi hoti hai jinme hum chahte hai ki unki values hamesa true ho
// unhe truthy statements kehta hai

// aur kuch statements aisi hoti hai jinme hum chahte hai ki unki values humesa false hi rahe unhe falsy statements kehte hain 


// nullish coalescing operator (??) : null undefined

// this nullish coalescing operator works in null and undefined only 

let val1;
val1 = 3 ?? 4;
val1 = null ?? 10;

console.log(val1)

// ye nullish coalescing operator basically databse se hum jab chize call karte hai tab use mai aata hai

// jab hum database se values call karte hai toh values agar null hai ya undefined hai toh pura structure khrab ho jata hai

// so to keep that structure we use these operators

// toh ye basically tab use hota hai manlo ki databse se null value aayi toh us time kya show karna hai user ko
// aur konsi value leni hai

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



// ternary operators *************

let man = 1;
man > 2 ? console.log("greater than 2") : console.log("less than 2");