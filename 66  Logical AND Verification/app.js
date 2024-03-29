//This function sees if both inputs are true
function checkBothTrue(val1, val2) {
    return val1 && val2;
}
console.log(checkBothTrue(true, false)); //show false
console.log(checkBothTrue(true, true)); //show true
console.log(checkBothTrue(1 > 8, 2 > 8)); //show true
console.log(checkBothTrue(8 > 6, 8 > 9)); //show true
