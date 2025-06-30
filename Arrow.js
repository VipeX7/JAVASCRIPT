const { log } = require("console")

//This refers to current component file 
const user = {
    username: "Tony Stark",
    Age: 45,

    welcomeMssg: function(){
        console.log(`Welcome ${this.username} to the team`);
      //  console.log(this);
    }
}
//user.welcomeMssg();
//user.username = "Steve Rogers";
//user.welcomeMssg();
//console.log(this); This gives empty object in node.js

//function Avengers(){
  //  console.log(this);}
//Avengers();//gives lots of values

const SM = function(){
    let use = "Peter";
    console.log(this.use);}

const SM11 = () =>{
    let name = "Alen Turing";
    console.log(this);
}
//SM11();

const addTwo = (a, b) {
    //=> ({username:"Parker"}){//arrow function 
   return a+b;
}

console.log(addTwo(2,5));