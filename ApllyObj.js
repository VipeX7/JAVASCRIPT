const myobj ={
    Delhi :'India',
    Canberra :'Australia',
    Moscow : 'Russia',
    Paris :'France',
}

for(const key in myobj){
    console.log(`${key} is captial of: ${myobj[key]} `);
    //console.log(myobj[key]);
}