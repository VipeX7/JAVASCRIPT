const code =["js","java","python","c++","ruby","swift"];
//code.forEach((item, index) => {
  //  console.log(`Index: ${index}, Language: ${item}`); });

//const values =code.forEach((item)=> {
  //  console.log(item);
   // return item;})// only returns undefined
//console.log(values); // This will log undefined since forEach does not return a value

const num = [1,2,3,4,5,6,7,8,9,10]
//const juggle = num.filter((item) =>{
  //  return num>4} );

const newNum = []
num.forEach((item) =>  {
  if (item >4){
    newNum.push(item);// This will push items greater than 4 into newNum
  }});
console.log(newNum);