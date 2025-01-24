let balance = 400
// by default toh js detect hi kar legi ki ye jo balance hai ye number hai
// but hum explicitly bhi declare kar sajte hai ki koi 1 variable humarra number hi ho
// with the help of objects

let score = new Number(400)

console.log(balance)
console.log(score)

// maths**************************

// maths library jo hoti hai vo javascript ke saath aati hai by default

 console.log(Math)

//  math bhi ek object hai

console.log(Math.random())

// math.random ke andar hamesa random values aati hai between 0 and 1

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)