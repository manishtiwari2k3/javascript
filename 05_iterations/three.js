// array specific loops

// for of loop

// for(const i of object){                yha pe object ka matlab hai kispe hum loop lagare hai

// }

let arr = ["manish" , "shivam" , "vivek" , "nikhil"]

for(const i of arr){
    // console.log(i); // isme hum arr[i] nahi i likhte hai loop apne aap smjh leta hai kya karna hai
}


let greeting = "Hello brother , how are you ?";
for(let greet of greeting){
    console.log(greet);
}

// maps ***********************

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('EU',"Europe")

for(let key of map){
    // console.log(key);
}

// maps are iterable through for of loop
// but
// objects are not iterable



let myObj = {
    name : "manish",
    course : "btech",
    salary : 120000
}

// for(let key of myObj){
//     console.log(key);
// }

// hum for of loop ki help se objects ko iterate nahi kar sakte
// agar hume objects ko iterate karna hai toh we can use
// for in loop

// for(let key in myObj){
//     console.log(key);    // iske through hum apne object ki keys ko access kar sakte hai
// }


// agar hume values ko access karna hai toh

// for(let key in myObj){
//     console.log(myObj[key]);
// }


// for both the values and the keys

for(let key in myObj){
    // console.log(`the value of the corresponding key ${key} is ${myObj[key]}`);
}


// hum for in loop ko arrays ke andar iterate karne ke liye bhi use kar sakte hain lekin
// jo hume value milegi vo index milega har ek element ka
// agar hume uski value nikalni hai toh hume alag se nikalni padegi

// for of loop directly sari values ko print karva deta hai

let arra = [2,5,6,7,8]

for(let key in arra){
    // console.log(`the value to the corresponding key ${key} is ${arra[key]}`);
}

// now using the for in loop in maps

let myMap = new Map()
myMap.set('IN','India')
myMap.set('USA','United States of America')
myMap.set('NZ','New Zealand')
myMap.set('EU','Europe')

// for(let key in myMap){
//     console.log(myMap[key]);         this will not give any output as maps are not iterable
//                                      we can access these using for of loop
// }


// arrays -> for of loop
// objects -> for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }