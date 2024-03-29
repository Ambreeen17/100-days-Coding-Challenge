//This function greets a user by name,or greets an anonymous user if no name is provided 
function greetUser(name:string="anonymous") {
    //say hello to the given name or to anonymous user
    console.log(`Hello,${name}!`);
}
//Trying he function with a name and without
greetUser("Maria");//output Hello,Maria
greetUser();//output Hello
