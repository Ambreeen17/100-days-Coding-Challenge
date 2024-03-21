//This programs makes a function that adds a specific number function
function makeAdders(valutToAdd) {
    //this is the magic box.It takes a number and adds your special number to it 
    return function (number) {
        return number + valutToAdd;
    };
}
//Making a magic box that adds 5
var addFive = makeAdders(5);
console.log(addFive(66666));
//if we put 66666 in the box,it gives us 15
//we made a function(magic box)that adds 5 to any number
