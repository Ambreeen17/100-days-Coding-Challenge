//Original function for calculating the area of a recangle 
function calculateArea(width:number,height:number):number{
    return width*height;
}
//Refactored into an arrow function
let
calculateArrowArea=(width:number,height:number):number=>width*height;
//Example usage of the arrow function 
console.log(calculateArrowArea(100,77));//logs the area of the rectangle
