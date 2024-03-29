 scope
block;
scope;
{
    var blockLet = "visible inside the block";
    var blockConst = "also only inside the block";
    console.log(blockLet); //works fine here
    console.log(blockConst); //also fine here
}
try {
    console.log(blockLet); //this will fail
}
catch (error) {
    console.log("blockLet is not accessible outside the block.");
}
try {
    console.log(blockConst); //this will also fail''
}
catch (error) {
    ("blockConst is not accessible outside the block");
}
//this show that le and const keep variables safe inside the block where they are defined
