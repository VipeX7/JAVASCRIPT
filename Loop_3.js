//for of loop

const num = [1,2,3,4,5,6];

for(const arr of num){
 //   console.log(arr);
}
const greetings = "Welcome, hello world!";
for(const greet of greetings){
  //  console.log(`Each charachter is ${greet}`);
} 

const map = new Map()
map.set("Ind", "India");
map.set("Isr", "Israel");
//map.set("Ind", "India"); // Duplicate key, will overwrite the previous value
map.set("Aus", "Australia"); 
console.log(map);

for(const [key, value] of map){
    console.log(key, ':-',value);
}


for(const key of map){
    console.log(`Key is ${key}`);}