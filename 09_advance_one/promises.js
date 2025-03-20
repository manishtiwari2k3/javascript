// // ye jo promises hote hai ye hume baad mai data laake dete hai

// // ye promise object hota hai iske andar bhi function hi hote hai
// // jisme resolve and reject hote hai
// // resolve ka mtlb ki kaam fulfill ho gya
// // aur reject ka matlab ki nahi hua

// // ye jo promise hai ye bhi recently introduce hua hai es4 tak promises nahi the
// // es6 mai promises aaye hai

// // jaise ki humne xhr mai padha tha states 0 1 2 3 4 etc.
// // in the same way promises bhi states mai hote hai
// // 1. pending
// // 2. resolved
// // 3. rejected

// // sabse pehle hum seekhenge promises ko bnaya kaise jata hai

// // promise basically 1 object hota hai 
// // jisme 2 parameters hote hai resolve and reject

// const promise1 = new Promise((resolve,reject)=>{
//     // do async tasks
//     // -> db call
//     // -> cryptography
//     // -> file read
//     // -> api call
//     // -> etc
//     // ab yha pe hum kuch bhi async task kar sakte hai
//     // ABI HUM setTimeout ka use karenge

//     setTimeout(()=>{
//         console.log("Async task 1");
//         resolve();
//     },1000);
// });


// // toh humne abi pdha ki resolve aur reject hote hai lekin isme abi tak humne jo kia isme resolve aur rejct ne kya kia

// // toh hum resolve aur reject ko use karenge promise object ko call karne ke baad

// promise1.then(()=>{
//     console.log("Promise consumed");
// });

// // ye then       ka diect relation hai humare promise object ke resolve se


// // lekin agar hum ise abhi run karvayenge toh hume pta chlega ki ye sirf set timeout function ka jo output hai use hi print karega
// // kuki humne abi then se connecvt hi ni kia hai resolve ko
// // agar hume then se connect karna hai toh hume resolve ko call karna hoga



// // jab hum resolve ko call karenge apne promise ke andar tab hi humara then connect hoga humare promise ke sath






// // another method of doing the same thing


// // we dont even have to store promise in a separate variable

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve();
//     },2000);
// }).then(()=>{
//     console.log("Promise consumed");
// })


// // is method mai humne 2 part mai karne ki jagah 1 hi part mai promise karva diia
// // ab ye promise kuch bhi kar rha ho skta hai
// // jaise ki db call, api call, file read, cryptography etc



// // an example of getting the data with the help of the promise

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({
//             name :"manish tiwari",
//             email : "manishtiwari2k3@gmail.com"
//         })
//     },1000)
// })

// promise3.then((val)=>{
//     console.log(val);
// })





const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(error==false){
            resolve({
                name :"manish",
                email : "manishtiwai2k3@gmail.com"
            })
        }
        else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.name;
    }).then((name)=>{
        console.log(name);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log("Promise settled");
    })


// ye abi tak jo kia humne islie kia kuki 
// taki agar error aaya hai toh vo catch ke help se show ho jaega from reject
// aur agar error nahi aaya toh vo then ke help se show ho jaega from resolve



// now there is one more block which is finally

// aur finally humesa execute hota hi hiota hai
// ye huk= islie lagate hai taki last mai hume pta lag jaye ki ya toh promise reslove hogya hai ya reject hogya hai




// finally block is always executed



// promise sirf .then aur .catch se hi nahi call hote 
// aur bhi kaafi tarike hote hai promises ko call karne ke
// jaise async await, generators etc

// ye humare use cases pe depend krta hai ki hum konsa use karenge
// asyc await is the most popular way to call promises from database, api, file read etc

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.