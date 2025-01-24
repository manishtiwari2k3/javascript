let mydate = new Date()
console.log(mydate)

console.log(mydate.toString())

console.log(mydate.toDateString())

console.log(mydate.toTimeString())

console.log(mydate.toISOString())

console.log(mydate.toJSON())


console.log(mydate.toLocaleDateString())


console.log(mydate.toLocaleTimeString())


// date is also an object

console.log(typeof(mydate));


// agar hum khudse declare karte hai dates ko js ke andar toh we have to keep in mind that
// moths jo hai vo 0 se start hote hai js ke andar

// jab hum singly karre hai tab aise hota hai
// but
// jab hum yyyy mm dd ke format mai likhte hai tab months 1 se hi start hote hai

let myTimestamp = Date.now()
console.log(myTimestamp);

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})