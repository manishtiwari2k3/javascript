// pehle ke time mai programmers ko khud hi memory allocate karni padti thi fer khud hi sara dhayn rakhna padta tha ki konsi chize kaise
// store ho rahi hai
// but in modern programming languages like javascript inme hume khudse memory vgrh allocate karne ki koi need nahi hoti
// in these languages there is a concept of dynamic memory allocation
// toh in modern day programming languages sab kuch khud se hi allocate ho jati hai

// there are particularly two types of memory spaces
// 1-> stack
// 2-> heap

// stack
// stack ke andar sare primitive datatypes store hote hai
// stack se hume copy milti hai variables ki

// heap
// heap ke andar sare non primitive datatypes store hote hai
// heap se hume references milte hai variables ke matlab orignal values


// stack mai agar hum same variable ko alag declare karenge toh isme copy mai value change hoti hai aur originial value
// unchanged rehti hai

// but in case of heap values jo hoti hai references ke through jaati hai toh isme original bhi change hojati hai

// stack ******************************************

// let name = "manish";
// console.log(name);

// let another_name = name;
// console.log(name);

// another_name = "mannu";
// console.log(name);
// console.log(another_name);    original remains unchanged


// heap ***********************************************

// let ob1 = {
//     name : "manish",
//     email : "manishtiwari2k3@gmail.com"
// }

// console.log(ob1.name);

// let another_name = ob1;
// console.log(another_name.name);

// another_name.name = "mannu";

// console.log(another_name.name);
// console.log(ob1.name);
// // another_name = "mannu";
// console.log(another_name);    //original also changed
// // console.log(ob1.name);