function useCompoundOperator(){
    let x=4;
    console.log("Initial x:",x);
    x+=2;
    console.log("After addition:",x);
    x-=1;
    console.log("After Subtraction:",x);
    x*=3;
    console.log("After Multiplication:",x);
    x/=2;
    console.log("After Division:",x);
    useCompoundOperator();

 }
 
