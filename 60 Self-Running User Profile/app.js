//This profile sets itself up and can share into about the user
var userProfile = (function () {
    //the user's details are kept inside 
    var Name = "Ammar";
    var Age = 27;
    var Nationality = "Pakistani";
    var NIC = 43101 - 888978 - 6;
    var Email = "ammar123@gmail.com";
    var Qualification = "PHD";
    //this part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(Name, ", Age: ").concat(Age, ", Nationality: ").concat(Nationality, " , NIC : ").concat(NIC, "  , Email:  ").concat(Email, " , Qualification: ").concat(Qualification));
        }
    };
})();
//Asking the profile to tell us about the user
userProfile.displayInfo(); //it says the user's detail
