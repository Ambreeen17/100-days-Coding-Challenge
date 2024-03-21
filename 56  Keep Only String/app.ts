//Mixed bag of items
let array=["Waqar",true,"Pakisan",786,"Ali",false,"America"];
//pick out only the words
let stringsArray=array.filter(item=> typeof item === "string");
//shows the list of just words
console.log(stringsArray);
//pick out only number
let booleanArray=array.filter(item=> typeof item === "boolean");
//show the list of just boolean
console.log(booleanArray);

