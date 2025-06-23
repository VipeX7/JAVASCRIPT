//Constructor method 
// Object.create() method

//object literales

//take a symbol and use as object key

const mySym = Symbol("key1")


const User = {
    name: "Peter",
    "full name": "Peter Parker",
    [mySym]: "mykey1", //symbol key
    age: 20,
    location: "New Delhi",
    email: "pp@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

User.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
User.email = "hitesh@microsoft.com"
// console.log(JsUser);

User.greeting = function(){
    console.log("Hello Parth "); 
    console.log("This is a function in this object")
}
User.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(User.greeting());
console.log(User.greetingTwo());

User.email = " Jignesh@gmail.com";
Object.freeze(User);
User.email = "Jisgnesh@microsoft.com";
console.log(User);
