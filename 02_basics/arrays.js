// arrays hum humesa square brackets ke andar likhte hai in almost all languages
// javascript mai array ke andar jaruri nahi hai ki same time ke hi elements present ho
// js ke andar alag alag types ke elements bhi peresent ho skte hai
// mtlb alag alag types ke

let myArr = [1 , 2 , 3 , "manish" , true]
console.log(myArr);

// array is an object which is used to store multiple items

console.log(typeof(myArr))

// arrays are resizable in js

console.log(myArr[4])

// another way of declaring the array using new keyword

let arr = new Array(1,2,3,4)
console.log(arr)

// array method
// push
// pop
// unshift

arr.unshift(9)

console.log(arr)

// unshift jo hai humesa starting se value add karta hai js ke andar but it is not suggested as ise use karne ke lie
// sari values ko right mai shift karna pad ra hai jiski vajah se computer pe load badh raha hai
// jo ki recommended nahi hoota

// join

const newArr = arr.join()
console.log(newArr)
console.log(typeof(arr))
console.log(typeof(newArr))

// ye jo join method hai ye kisi purane array ko kisi naye array mai dalne mai help karta hai but the main difference
// after joining the previous array into the new array is that join jo hota hai vo purane ko naye mai add toh karta hi hai
// saath hi saath vo array ka type change kardeta hai string mai


// slice aur splice

// slice aur splice mai major difference ye hai ki
// slice mai jo humara main array hota hai vo unchanged hota hai aur last value include nahi hoti arr.slice(1,2)

// jabki slice se humare originial array bhi unchange hota hai kuki usme se vo vala part hi alag ho jata hai aur isme last value bhi
// included hoti hai

// array

// const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);