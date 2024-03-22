//creating a custom type (type alias) for shapes that could be circles or rectangles
type shape={
    kind:"circle" | "rectangle";
    radius?:number;//only for circle
    width?:number;//only for rectangle
    height:number;//only for rectangle
};
    //Describing a rectangle using our shape type
    let circle:shape={
        kind: "circle",
        radius: 7,
    };
//Describing a rectangle using our shape type
let rectangle:shape={
    kind:"rectangle",
    width:55,
    height:77,
};
//showing what we decribed
console.log(circle);
console.log(rectangle);
