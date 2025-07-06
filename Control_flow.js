//const isloggedin = true;/
//const temp = 40;

//if(temp <50){
 //   console.log("It's a hot day, temperature below 50");
//} else{
 //   console.log("Temperature is more than 50");}

 //const score = 200;
 //if(score >100){
 //   let power = "Fly";  
 //   console.log("You have the power to " + power);} w

 //const balance = 2000;
 //if(balance >500) console.log("I have more than 500 in my account");

 //else if(balance <500) {
   //console.log("I have less than 500 in my account"); 
// } else if (balance < 850){
  // console.log("Money less than 850 but more than 500");
// } else{console.log("I have less than 1200");  }

const loggedin = true;
const debitcard = true;
const loggedinfromGoogle = false;
const loggedinfromemail = true;
if(loggedin && debitcard){
  console.log("You can make a purchase");}

if(loggedinfromGoogle || loggedinfromemail){
  console.log("You are logged in."); 
}