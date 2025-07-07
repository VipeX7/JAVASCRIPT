//Runs for 10 times 
//Includes inner loop as wel as outer loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 6){
        console.log("Mid-point reached.");
    }
    console.log(element);
    
}
//runs for tables from 1-10
for (let i = 1;i<=10;i++){
    console.log(`Outer loop: ${i}`);
    for (let j= 1; j <=10; j++){
       // console.log(`inner loop value ${j} and inner loop ${i}`);
       console.log(i + '*' + j + '='+ i*j);}
}

let ar = ["apple", "banana", "cherry"];
console.log(ar.length);
for(let i = 0; i <= ar.length; i++) {
    const ele = ar[i];
    console.log(ele);
}