const Mynum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const alpha = Mynum.map((i)=>{ return i + 10});

const beta = Mynum.map((Mynum) => {return Mynum *10})
            .map((Mynum)=>{return Mynum +1})
            .filter((Mynum)=>{return Mynum >60});

console.log(beta);