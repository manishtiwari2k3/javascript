// // reduce

// const nums = [1,2,3,4]

// // reduce ke andar basically 2 values ya arguments hote hai
// // 1 -> accumulator  -> ye jo hai vo total sum store karta hai
// // 2 -> current value -> ye current value ko store karta hai

// const mynum = nums.reduce(function (acc , curval){
//     return acc+curval
// },0) // yha pe basically humne 0 islie declare kara kuki accumulator ke andar current value nahi hoti jha se start kare vo

// console.log(mynum)



const nums = [1,2,3,4,5]

const mynum = nums.reduce((acc , curval)=>{
    console.log(`acc: ${acc} , curval:${curval}`)
    return acc+curval
},5)  //hum accumulator ko kisi se bhi intialize kar skte hai kisi bhi value se


console.log(mynum)

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);