let MyDate = new Date();
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleString());

let myCreate= new Date(2023,0, 23);
console.log(myCreate.toString("2023-01-22"));

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(myCreate.getMonth());
console.log(myCreate.getFullYear());
console.log(myCreate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'utc',
}));