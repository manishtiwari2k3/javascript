// // // filter, map and reduce

// // const coding = ["js" , "c++" , "java" , "python"]

// // // coding.forEach((item)=>{
// // //     console.log(item);
// // // })

// // // yeh jo for each loop hota hai ye koi bhi value return nahi karta 

// // const a = coding.forEach((item)=>{
// //     // console.log(item);
// //     return item;
// // })

// // console.log(a);

// // // isme hume agar lop ke andar humesa toh return karna ni hota hai
// // // ya humesa toh values print nahi karvani hoti hai toh agar hume usme kuch karvana hota hai toh
// // // toh hum kse karte hai manlo hume koi condition lgani hai


// // const nums = [1,2,3,4,5,6,7,8,9,10]

// // hum filters ki help se de skte hai conditions

// // nums.filter()

// // yeh function bhi apne andar callback function hi leta hai

// // nums.filter((numb) => {
// //     numb>5;                    isme jo hua hai ye same foreach mai b hota hai lekin for each hume return nahi karta kuch
// // }) 



// // const a = nums.filter((numb) => {
// //     return numb>5;    ///explicitly return in case of multiple lines
// //     // return numb;               
// // })

// // console.log(a);

// // const a = nums.filter((numb) => numb>5)          //implicit return

// // console.log(a);               //***************correec********************** */


// // map**********************

// // map jo hota hai basically vo values add karne ke liye use hota hai humare arrayy mai
// // ye basically ek callback function hai
// // aur ye for each ki trah nahi hota ye value return karta hai 

// const nums = [1,2,3,4,5,6,7,8,9,10];
// const myn = nums.map((n)=>{
//     return n+10;
// })
// console.log(myn)



// // hum map ke bad filter
// // map ke bad map
// // filter ke baad filter
// // aise bhot sare functions ko lagatar use kar sakte hai and this is known as chaining
// // aise hi kitni bhi chaining kar sakte hai hum accoeding to our use


const num = [1,2,3,4,5]
const myn = num.filter((numb)=>{
    return numb>2
}).map((numb) => {
    return numb*10
})
console.log(myn)

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);