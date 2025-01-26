//{}

// curly braces is the scope in the majority of the languages
// not in the case of objects
// objects ke alava har jagah

// {}
// jo bhi hum curly braces ke andar likhte hai vo hota hai local scope
// uske alava jo bhi hai vo sara hota hai global scope

// jab hum node ke through run karte hai kisi program ko tab humara global scope alag hota hai
// aur jab hum inspect ke through browser se run karte hai toh global scope alag hota hai
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// jo parent ke andar values hai vo acces kar skta hai child in terms of scope
// lekin
// jo child ke andar values hai vo parent access nahi kar skta


// javascript ke andar variables kuch b hold kar skte hai like arrays , json files etc.

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

//  jab hum kisi variable mai nahi dalre function ko toh hum use uski declaration se pehle bhi access kar skte hai

function addone(num){
    return num + 1
}



addTwo(5)

// but jab hum use kisi variable ke andar daal de rahe hai toh hum use aise access nahi kar skte jab hum variable ke andar
// function ko daal dete hai toh vo expression ban jate hain aur expression ko hum declaration se pehle access nahi kar skte

const addTwo = function(num){
    return num + 2
}