//Original function for calculating the area of a recangle 
function calculateArea(width, height) {
    return width * height;
}
//Refactored into an arrow function
var calculateArrowArea = function (width, height) { return width * height; };
//Example usage of the arrow function 
console.log(calculateArrowArea(100, 77)); //logs the area of the rectangle
