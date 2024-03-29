//This function shows every detail about an object 
function logObjectProperties(obj:object){
    for(let property in obj){
        //loop through each property in the object
        console.log(`${property}: ${obj[property]}`)
        //shows the property name and its value
    }
}
// using the function with a car object
logObjectProperties({
        bookName:"Zawiya",
        Writer:"Ashfaq Ahmed",
        year:2011,
        Publisher:"Az Publisher",
});
//it tell us each piece of information stored about the Book
