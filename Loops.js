//Runs for 10 times 
//Includes inner loop as wel as outer loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 6){
        console.log("Mid-point reached.");
    }
    console.log(element);
    
}

for (let i = 0;i<=10;i++){
    console.log(`Outer loop: ${i}`);
    for (let j= 0; j <=10; j++){
        console.log(`inner loop value ${j} and inner loop ${i}`);
    }
}