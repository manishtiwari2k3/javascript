for(let index = 0 ; index<10 ;index++){
    const a = index+1;
    // console.log(a);
}

// break

// agar kahi bhi beak ki condition satisfy ho gyi toh vahi ke vahi loop band ho jayega aur kuch print nahi hoga
// lekin
// agr break ki jgah continue aayega toh fer 
// continue jis condition pe aayega vo condition 1 bar ke liye skip ho jayegi aur baki sari ki sari as it is
// print ya execute ho jayegi

// for(let i=0;i<10;i++){
//     if(i==5){
//         console.log("i is detected");
//         break;
//     }
//     console.log(i);
// }

for(let i=0;i<10;i++){
    if(i==5){
        console.log("i is detected");
        continue;
    }
    console.log(i);
}

// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
