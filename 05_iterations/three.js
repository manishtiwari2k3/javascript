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

// maps are iterable through for of loop
// but
// objects are not iterable

