const webUser = {}
webUser.id = "123xyz";
webUser.name = "Patrick";
webUser.isloggedIn = false;
//console.log(webUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullname:{
            firstname: "Peter",
            lastname: "Parker",
        }
    }
}
//console.log(regularUser.fullname?.userFullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj4 = {5:"c", 6:"d"};
//const obj3= {obj1, obj2};
//const obj3 = Object.assign({},obj1,obj2,obj4);//{} is for guranteeing a new object is created
const obj3 = {...obj1, ...obj2, ...obj4}; // Spread operator to merge objects
//console.log(obj3);

const users = [
    {
        id: "123xyz",
        name: "Patrick",
    },
    {
        id: "456abc",
        name: "John Doe",
    },
    {
        id: "789def",
        name: "Jane Smith",
    }
]
users[1].email;
console.log(users[1].email); // undefined, as email is not defined in the object
console.log(Object.keys(users[1]));
console.log(Object.values(users[1]));
console.log(Object.entries(users[1]));
console.log(Object.isproperty, "name");