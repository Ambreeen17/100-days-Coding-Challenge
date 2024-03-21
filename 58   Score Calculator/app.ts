//This program  calculate the average of all scores given
function averageScore(...scores:number[]):number{
    //add all the scores together and divide by the number of scores
    let total=scores.reduce((sum,score)=>sum+score,0);
    return total/scores.length;
}
//example:finding the average of four scores
console.log(averageScore(99,88,77,66));
