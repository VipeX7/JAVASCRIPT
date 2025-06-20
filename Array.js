const arr =[0,11,2,36,4,];
const MyHero = ["Naanu", "Mamma"];
const myArr = new Array(1,2,3,4);
console.log(arr[1]);

//Methods

myArr.push(7);
myArr.pop();
console.log(myArr);
//arr.unshift(88);//puts value in front
//arr.shift();
console.log(arr.includes(3))

const myarr3= arr.join();
console.log(arr);
console.log(typeof arr);
console.log(myarr3);
console.log(typeof myarr3);//join changes type of array to string


//// Splice and Slice  /////////

//console.log("S = ", arr);
//const myn1= arr.slice(1,3);
//console.log(arr);
//console.log("P = ", myn1);

//const mn = arr.splice(1,3);
//console.log("M = ", arr);
//console.log(mn);

//More in Array //

const heros = ["Thor","Spiderman","Ben10"];
const Villians = ["Thanos", "Green Goblin","Villgax"];

heros.push(Villians);
console.log(heros);

const heross = heros.concat(heros);
console.log(heross);

const another = [1,2,3,[4,5,6],7,3,5,[6,7,,8,[4,3]]];
const real_another = another.flat(Infinity);

console.log(real_another);

console.log(Array.isArray("Jack"));
console.log(Array.from("Jack")); // converts string to array
console.log(Array.from({name: "Jack",}));//gives empty array as it is not iterable

let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score, score2, score3)); // creates an array from the arguments passed