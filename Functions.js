function Word(){
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("I");
    console.log("A");
}
Word();

function addtwoNumbers(num1, num2)//parameters
{
    console.log("Addition is: ",num1+num2);
}
addtwoNumbers(20,10);
addtwoNumbers(2,"a");
addtwoNumbers(4,null);

function Loginuser(username){
    if (username === undefined){
        console.log("Enter Username you idiot!");
        return;
    }
    return `${username} logged in`;
}
//console.log(Loginuser()); //will return undefined
//console.log(Loginuser("Peter"));

function CalculateCartPrice(val1 , val2, ...num0){ //... returns an array of arguments || val1 & val2 ignores the first 2 values
    return num0
}
//console.log(CalculateCartPrice(2,234,2545));

const user ={
    usrname : "Chocolate",
    price : 100,
}
function handleObject(obj){
    console.log(`Username is ${obj.usrname} and price is ${obj.price}`);
}
//handleObject(user);
handleObject({
    username : "Jack",
    price : 499,
})
const mynewArray = [100,400,200,600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(mynewArray));