// mostly used loop for arrays

// for each loop

// for each actual mai loop nahi hai
// ye ek higher order function hai jo by default present hota hai js mai
// jiske through hum arrays ke elements ko access kar sakte hain

const names = ["MANISH" , "SHIVAM" , "VIVEK" , "NIKHIL" , "NAVNEET"]

// names.forEach()
// yeh jo for each hai ye higher order function hota hai ye basically ek callback function hai
// toh iske andar hum ek function likhenge aur function vaise hi likhenge jaise hum normal functions likhte hai
// bas unke andar koi function ka naam nahi likhenge kuki it is a callback function


names.forEach(function(values){
    // console.log(values);
})

// we can also access these using the arrow functions

names.forEach((item)=>{
    // console.log(item);
})

// yeh jo for each hota hai ye sirf items ko hi access nahi karvata balki isli vajah se 
// hum baki chize bhi access kar sakte hai like index , complete etc,
// so it have various parameters

names.forEach(function(item,index,arr){
    console.log(item,index,arr);
})

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )

//  array ke andar agar object hai toh unhe b accesss kr skte h hum for each loop se