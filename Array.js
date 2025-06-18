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

console.log("S = ", arr);
const myn1= arr.slice(1,3);
console.log(arr);
console.log("P = ", myn1);

const mn = arr.splice(1,3);
console.log("M = ", arr);
console.log(mn);