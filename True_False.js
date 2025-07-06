const user = "";
 if(user){
  console.log("Has email Id");
 } else{
  console.log("No email Id");
 }

 // Falsey values in JavaScript
// false, 0, -0, BigInt 0n, null, undefined, NaN(not-a-number)
//True Values in JavaScript
// "0", "false",' ', [],{},function(){}, Symbol(), new Date()

if (user.length ===0){
  console.log("Array is empty");
}

const empobj = {}
if(Object.keys(empobj).length ===0){
  console.log("Object is empty!");
}