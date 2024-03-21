// A list of grade
let grades=[91,87,68,77,61,94];
//Calculate the average of grade
let averageGrade=grades.reduce((total,grade)=>total+grade,0)/grades.length;
//Show the averarge grade
console.log(averageGrade);
