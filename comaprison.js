console.log("2">1);
console.log("02" > 1);
console.log(null>1);
console.log(null == 0);
console.log(null>=0);

console.log(undefined == 0); // true
console.log(undefined >0);

///////////////// STACK AND HEAP MEMORY///////////////
// Stack (primitive types) vs Heap (reference types/ non-primitive types)

let myWork = "Learning";
let ace= myWork;
ace = "single";
console.log(myWork);
console.log(ace);

let user = {
    email: "pp@gmail",
    upi: "pp@upi",
}

let user2 = user;
user2.email = "pp2@gmail";

console.log(user.email); // pp2@gmail
console.log(user2.email); // pp2@gmail