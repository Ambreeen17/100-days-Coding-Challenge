//Function declaration for squaring a number 
function squareDeclaration(number) {
    return number * number;
}
//function expression for squaring a number 
var squareExpression = function (number) {
    return number * number;
};
//using both functions to square the number 8
console.log(squareDeclaration(8)); //output 64
console.log(squareExpression(8));
// both function give same result

