'use strict';

let personInfo= [];

let nameInput = prompt("Enter your name please");
   if(nameInput != ""){
      personInfo.push(nameInput);
    let genderInput = prompt ("Enter your gender please, The answer should be either (male or female)");

         if(genderInput==""){
            personInfo.push("invalid");
         }
         else{
            personInfo.push(genderInput);
         }
            
            let ageInput = prompt("Enter your age please");
            if(ageInput==""){
               personInfo.push("invalid");
            }
            else if(ageInput<=0){
               while (ageInput<=0)
            {
                alert("The age you entered is less than or equal zero.. try again");
                         ageInput= prompt("Enter your age please");
                     
            }
            personInfo.push(ageInput);
            }
            else{
               personInfo.push(ageInput);
            }

            let ifStudentInput = prompt("Are you a student?, The answer should be either (yes or no)");
            if(ifStudentInput==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifStudentInput);
            }

            let ifEmployeeInput = prompt("Are you an employee?, The answer should be either (yes or no)");
            if(ifEmployeeInput==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifEmployeeInput);
            }

            let ifSatisfiedInput = prompt("Are you satisfied from ToDo webapp?, The answer should be either (yes or no)");
            if(ifSatisfiedInput==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifSatisfiedInput);
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

                  printPersonInfo();
   }
   else{
    nameInput= prompt("Enter your name please");
   personInfo.push(nameInput);
    let genderInput = prompt ("Enter your gender please, The answer should be either (male or female)");
         if(genderInput==""){
            personInfo.push("invalid");
         }
         else{
            personInfo.push(genderInput);
         }
         
            let ageInput = prompt("Enter your age please");
            if(ageInput==""){
               personInfo.push("invalid");
            }
            else if(ageInput<=0){
               while (ageInput<=0)
            {
                alert("The age you entered is less than or equal zero.. try again");
                         ageInput= prompt("Enter your age please");
                     
            }
            personInfo.push(ageInput);
            }
            else{
               personInfo.push(ageInput);
            }


            let ifStudentInput = prompt("Are you a student?, The answer should be either (yes or no)");
            if(ifStudentInput==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifStudentInput);
            }

            let ifEmployeeInput = prompt("Are you an employee?, The answer should be either (yes or no)");
            if(ifEmployeeInput==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifEmployeeInput);
            }
            
            let ifSatisfiedInput = prompt("Are you satisfied from ToDo webapp?, The answer should be either (yes or no)");
            if(ifSatisfiedInput==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifSatisfiedInput);
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
                
                  printPersonInfo();
        
     
   }


   function printPersonInfo(){

      for(let i=0; i< personInfo.length; i++){  
         console.log(personInfo[i]);  
         }  

   }