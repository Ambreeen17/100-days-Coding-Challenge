//Define a function that accepts multiple hobbies as a argument function
function logHobbies(...hobbies:string[]) {
//loops through each hobby in a array.
hobbies.forEach((hobby: any) => {   //logs a statementfor each hobby
    console.log (`I enjoy ${hobby}`);
});
}
//calls the  function with three hobbies
logHobbies("Coding","Baking","Painting");
