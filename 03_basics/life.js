// IIFE -> Immediately Invoked Function Expression

// jab bhi hum function likhte hai toh hume use immediately invoke krana padta hai

// IIFE hum tab likhte hai manlo ki global variables jo hai unki vajah se jo humare functions hai vo pollute ho rahe hai
// agar global variables ki vajah se humare functions pollute ho rahe hote hai toh hum vaha par IIFE likh dete hai aur hum IIFE
// islie likhte hai taki humara atleast vo function toh global variables ki vajah se pollute na ho jisme humne iife likha hai

// syntax to declare IIFE

// ()()
// 1st for function declaration and 2 for invoiking it

(function coffee(){
    name : "manish"
    console.log(`Coffee ban gayi hai`)
})();


// we can write this in the form of arrow functions also

(() => {
    console.log(`paneer khalo`)
})();

(() => {
    console.log(`maatr paneer khalo`)
})();

// agar hum aise hi 1 aur IIFE declare kar de toh vo dusra IIFE hume error dega 
// kuki IIFE ko pta nahi hota hai ki hume ise rokna kaha hai toh taaki hum use rok sake we have to end IIFE witha ;

(function paneer(){
    console.log(`paneer khalo`)
})();

(function matarpaneerpaneer(){
    //named IIFE
    console.log(`maatr paneer khalo`)
})();

((name) => {
    // unnamed IIFE
    console.log(name);
})("manish");

// we can write two IIF together with the help of ;














// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')