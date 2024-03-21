Mixed bag of items
var array = ["Waqar", true, "Pakisan", 786, "Ali", false, "America"];
//pick out only the words
var stringsArray = array.filter(function (item) { return typeof item === "string"; });
//shows the list of just words
console.log(stringsArray);
//pick out only number
var booleanArray = array.filter(function (item) { return typeof item === "boolean"; });
//show the list of just boolean
console.log(booleanArray);

