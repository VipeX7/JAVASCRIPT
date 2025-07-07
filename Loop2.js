//we only check condition in while and do-while loop

let i=0;
//while (i<=10) {
 //   console.log(`value of index is ${i}`);
//    i = i+2;}

let meriarray = ["Cristiano", "Messi", "Neymar", "Ronaldhino"];
let mearr = 0;
while(mearr<meriarray.length){
    console.log(`Value is ${meriarray[mearr]}`);
    mearr = mearr + 1;
}

let score = 11;
//in do-while loop, we check condition after executing the code block at least once
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <=10);