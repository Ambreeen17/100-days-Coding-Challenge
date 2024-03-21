// A list of grade
var grades = [91, 87, 68, 77, 61, 94];
//Calculate the average of grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
//Show the averarge grade
console.log(averageGrade);
