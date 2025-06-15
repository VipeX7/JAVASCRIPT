const score= 500;
console.log(score);

const balance = new Number('1000');
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const other = 100.123456789;
console.log(other.toPrecision(5)); 

const hund = 200000;
console.log(hund.toLocaleString());
console.log(hund.toLocaleString('en-IN'));


console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(4.2)); 
console.log(Math.ceil(4.2)); // Round up
console.log(Math.min(5,18,14,2,1,2));
console.log((Math.random()*10 ) + 1);
const min= 10;
const max =20;
console.log(Math.random()*(max-min)+1);
console.log(Math.floor(Math.random()*(max-min+1)+min)); // Random integer between min and max