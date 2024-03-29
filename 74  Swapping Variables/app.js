function swapValues() {
    var a = 5, b = 10;
    console.log("Before swap : a=", a, "b=", b);
    var temp = a; //temporarily stores the value of a
    a = b; //sets a to b's value
    b = temp; //sets b to a's original value stored in temp
    console.log("After Swap :a=", a, "b=", b); //;ogs the swapped values
    swapValues();
}
