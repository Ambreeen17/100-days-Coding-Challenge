//This profile sets itself up and can share into about the user
    let userProfile=(function(){
        //the user's details are kept inside 
        let Name="Ammar";
        let Age=27;
        let Nationality="Pakistani";
        let NIC=43101-888978-6;
        let Email="ammar123@gmail.com";
        let Qualification="PHD";
        //this part shares the user's details
        return{
            displayInfo:function (){
         console.log(`Name: ${Name}, Age: ${Age}, Nationality: ${Nationality} , NIC : ${NIC}  , Email:  ${Email} , Qualification: ${Qualification}`);
 }
  };
        })();
        //Asking the profile to tell us about the user
        userProfile.displayInfo();//it says the user's detail
