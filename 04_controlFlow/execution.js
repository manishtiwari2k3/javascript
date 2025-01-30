// in this we will learn how javascript files actually execute in the code

// we will basically learn javascript execution context*******************************

// javascript execute code + call stack

// node ka execution context aur browser ka execution context dono alag alag hote hain

// humne dekha tha browser ke parent mai window object aata hai
// aur
// node ke execution context mai null object aata hai



// ********************************************

// javascript ke execution context ke andar

// 1 -> global context toh hoga hi hoga jo hum 
// this keyword ki help se refer karte hain
// 2 -> functional execution context
// 3-> we also have eval execution context -> property of global object we dont have to study about it right now

// javascript is single threaded
// iske andar everything is just a single process


// ********************************************

// humara javascript ka jo code hota hai vo actual mai 2 phases mai run karta hai

// 1 -> memory creation phase  => sirf memory allocate hoti hai variables ke liye
// 2 -> execution phase => execute kiye jaate hain functions vgrh variables ke upar


// ***********************************************

// HOW JAVASCRIPT ACTUALLY WORKS

// steps are :-

// 1) Global execution
//      ye toh hota hi hota hai chahe hum kitna hi basic code lele ya kitna hi advance code lele 
//      global execution with the help of the this keyword toh hota hi hota hai hamesa

// 2) Memory Allocation Phase
//      isme humare variables ko memory allocate hoti hai aur humare variables ko undefined value assign kar 
//      di jati hai
//      a = undefined
//      b = undefined
//      addnum = definition
//      result1 = undefined
//      result2 = undefined

// ye 2 phases toh hote hi hote hai

// 3) Execution phase
//      a = 10
//      b = 5
//      addnu, = {execution context} function humare 1 khudka execution context bnate hain = (newvariable environment + execution thread)

//      ye jo functions apna khudka execution environment bnate hai ye contain karte hai
//      apna khudka environment variable + execution thread 
//      aur ye process har baar hota hai jab bhi  function declare hote hain
//      ** iske baad memory creation phase aur execution phase dobara hote hain


//      jaise hi execution context ka kaam khatam hojata hai ye global context ko value 
//      return kar dete hai aur delete hojate hai **************************


