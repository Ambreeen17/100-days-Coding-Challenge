//This function greets a user by name,or greets an anonymous user if no name is provided 
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    //say hello to the given name or to anonymous user
    console.log("Hello,".concat(name, "!"));
}
//Trying he function with a name and without
greetUser("Maria"); //output Hello,Maria
greetUser(); //output Hello

