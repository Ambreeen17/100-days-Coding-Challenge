//This function prints number from 1 to 5 using a loop function
function printNumbersWithLet(){
    for (let i=1;i<=5;i++){
        //uses "let" for loop variable "i"
        console.log(i);//logs number 1 to 5
    }//"i"is not accessible here,outside the loop because it's defined with "let"
}
printNumbersWithLet();
