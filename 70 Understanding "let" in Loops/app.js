function printNumbersWithLet() {
    for (var i = 1; i <= 5; i++) {
        //uses "let" for loop variable "i"
        console.log(i); //logs number 1 to 5
    } //"i"is not accessible here,outside the loop because it's defined with "let"
}
printNumbersWithLet();
