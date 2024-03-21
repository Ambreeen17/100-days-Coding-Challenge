//Creating a blueprint (interface)for student information
interface Student{
    Name:String,
    Age:Number,
    Courses:String[];
}
//Filling the blueprint with an example student
let Student:Student={
    Name:"Zaharah",
    Age:18,
    Courses:["Chemisry","Physics","Statistics"]
};
//Showing the student's information
console.log(Student);
