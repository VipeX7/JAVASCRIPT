//Immediately Invoked Function Expressions IIFE
(function connect(){ //named IIFE
    console.log("Database Connected");
})();

( (age) => {
    console.log(`DB Connected with ${age}`);
})(age =("Server") );
//connect(); global scope k pollution se bachne ke liye IIFE use hota hai
//IIFE ka use karke hum function ko turant invoke karte hain bina kisi naam