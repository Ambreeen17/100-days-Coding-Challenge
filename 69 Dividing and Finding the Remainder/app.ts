function divideAndRemainder(Dividend:number,Divisor:number):{
    quotient:number;remainder:number}{
        let quotient=Math.floor(Dividend/Divisor);
        let remainder=Dividend%Divisor;
        return{quotient,remainder};
    }
    console.log(divideAndRemainder(10,3));
    console.log(divideAndRemainder(10,2));
