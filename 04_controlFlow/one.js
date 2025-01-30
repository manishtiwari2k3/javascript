// control flow

// humne apni javascript file pe jo bhi code likha hai vo humesa run nahi hona chahiye
// vo kuch conditions pe hi run hona chie
// agar condition satisfy hori hai tabhi vo code run hona chahiye

// ise hi hum kehte hai -> control flow ya logic flow

// if(condition){               condition true hui tabi ye block execute hoga
//     scope                     false hoga toh nahi hoga execute 
// }

// switch statement

const month = 99;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("January");
        break;
    case 1:
    default:
        console.log("nothing");
        break;
    
}


// agar hum yha pe break nahi use karte case ke baad toh ye satisfy hone ke baad jitna bhi code hai sabk exeute kara deta
// except default
// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}