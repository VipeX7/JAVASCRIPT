//var c = 300;
var a = 300;
if(true){
    let a=10;
    const b=20;
    console.log("INNER : ",a);
}
//for(let i=0; i<array.length; i++){
//    const element = array[i];
   // console.log("FOR : ",a);}

//console.log(a);
///console.log(b);
//console.log(a);

function one(){
    const username = "Ben";

    function two(){
        const website = "youtube";
        console.log(username);
    }
   // console.log(website); // This will throw an error because 'website' is not defined in this scope
    two()
}
one()