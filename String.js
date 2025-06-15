const name = "Parth";
const DoB = 2003;
console.log(name + " was born in " + DoB + " in New Delhi"); // Parth was born in 2003
console.log(`My Name is ${name} and i was born in ${DoB} in New Delhi`);//String Interpolation

const gameNAme= new String('counter-strike-go');
console.log;(gameNAme.split('-'));
console.log(gameNAme[0]);
console.log(gameNAme.__proto__); // String.prototype gives object
console.log(gameNAme.length);
console.log(gameNAme.toUpperCase());


console.log(gameNAme.charAt(4));
console.log(gameNAme.indexOf('c')); 

const New= gameNAme.substring(0,3);//Will not take -ve value
console.log(New);

const Hq = gameNAme.slice(-7,5);//Can take -ve Value
console.log(Hq);

//********** Trim and Replace Method************/

const Hel="  Football  ";
console.log(Hel.trim());//Without space
console.log(Hel);//with space
console.log(Hel.replace('Foot','Volly'));

const url = "https://www.youtube.com/@MonksWarriors"
console.log(url.replace('Monk','Hello'))

