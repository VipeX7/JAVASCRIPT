const num = [1,2,3,4,5,6];
//acc = accumulator, curval = current value
//const Myvar = num.reduce(function(acc, curval){
   // console.log(`acc:${acc} curval:${curval}`);
  ///  return acc+curval
//}, 0);


const total = num.reduce((acc, curval) => acc+curval,0);
console.log(total);

const cart = [{
    item :"Carrot",
    price: 40,
},
{
    item: "Potato",
    price: 20,
},
{
    item: "Onion",
    price: 30,
}]

const totalPrice =cart.reduce((acc,item) => acc+item.price,0);

console.log(totalPrice);