var color = "blue";
color = "purple";
console.log(color); //output purple
var colorFavorite = "blue";
try {
    colorFavorite = "purple"; //this line cause error
}
catch (error) {
    console.log("Error:cannot reassigned the const-declared variable"); //this message  is shown 
}
