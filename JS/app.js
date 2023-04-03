'use strict';


let nameInput = prompt("Enter your name please");
    console.log(nameInput);
   if(nameInput != ""){
    let genderInput = prompt ("Enter your gender please, The answer should be either (male or female)");
         console.log(genderInput);
         
            
            let ageInput = prompt("Enter your age please");
            console.log(ageInput);
            while (ageInput<=0)
            {
                alert("The age you entered is less than or equal zero.. try again");
                         ageInput= prompt("Enter your age please");
                     console.log(ageInput);
            }
                
                    let welcomeConfirm = confirm("Do you want to skip the welcoming message?")
                    if(welcomeConfirm == false){
                    if(genderInput == "female"){
                       alert("Welcome to ToDo webapp Ms "+nameInput);
                    }
                    else if(genderInput == "male"){
                        alert("Welcome to ToDo webapp Mr "+nameInput);
                    }
                    else{
                       alert("Welcome to ToDo webapp "+nameInput);
                    }
                  }
                 
                 
         
         
   }
   else{
    nameInput= prompt("Enter your name please");
    console.log(nameInput);
    let genderInput = prompt ("Enter your gender please, The answer should be either (male or female)");
         console.log(genderInput);
         
            
            let ageInput = prompt("Enter your age please");
            console.log(ageInput);
            while (ageInput<=0)
            {
                alert("The age you entered is less than or equal zero.. try again");
                         ageInput= prompt("Enter your age please");
                     console.log(ageInput);
            }
                
                    let welcomeConfirm = confirm("Do you want to skip the welcoming message?")
                    if(welcomeConfirm == false){
                    if(genderInput == "female"){
                       alert("Welcome to ToDo webapp Ms "+nameInput);
                    }
                    else if(genderInput == "male"){
                        alert("Welcome to ToDo webapp Mr "+nameInput);
                    }
                    else{
                       alert("Welcome to ToDo webapp "+nameInput);
                    }
                  }
                
                 
        
     
   }