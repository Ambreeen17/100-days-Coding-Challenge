Return their sum as a number */
function addNumberAndString(number1:number,numberString:string):number {
    return number1+Number(numberString); 
}
console.log(addNumberAndString(10,"5"));
console.log(addNumberAndString(100,"99"));
