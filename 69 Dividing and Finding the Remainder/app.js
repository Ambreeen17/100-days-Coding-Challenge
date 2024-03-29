function divideAndRemainder(Divident, Divisor) {
    var quotient = Math.floor(Divident / Divisor);
    var remainder = Divident % Divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
console.log(divideAndRemainder(10, 2));
