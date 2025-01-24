// agar js seekhni hai toh 2 cheeze master karlo
// 1 objects
// 2 events

// there are two ways to create an objects
// -> as literals
// -> as constructors

// agar hum literals ki trah bnate hai toh singleton nahi banta kabhi bhi
// but
// agr hum constructors ki trah bnate hai toh vo humesa singleton hi banega

// object literals

// const jsUser = {} //syntax to declare objects

// jab b hum object declare karte hai toh uske andar key value ki form mai store hoti hai values

const jsUser = {
    name : "manish",
    course : "btech",
    salary : 120000,
    location : "bangalore",
    gmail : "manishtiwari2k3@gmail.com"
}

console.log(jsUser)

console.log(jsUser.salary)

// console.log(jsUser.name)
// this is not the correct method as behind the scenes name is taken as string so we have to take it as string

console.log(jsUser["name"])

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());