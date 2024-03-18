//Define a function that accepts multiple hobbies as a argument function
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    //loops through each hobby in a array.
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
//calls the  function with three hobbies
logHobbies("Coding", "Baking", "Reading");
