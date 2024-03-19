//A way to make a flexible list 
function createObjectWithDynamicKey(key:string,value:string){    

    let dynamicObject= {};

    //setting up a section in a list with a changeable name
    dynamicObject=value;
    return dynamicObject;
}
///using the flexible list setup for a user's preference
let userPreference=createObjectWithDynamicKey("theme","dark");
//showing the user's choice
console.log(userPreference);
