'use strict';

let personInfo= [];

let nameAnswer = personName ();
   if(nameAnswer != ""){
      personInfo.push(nameAnswer);

  let genderAnswer = personGender ();
         if(genderAnswer==""){
            personInfo.push("invalid");
         }
         else{
            personInfo.push(genderAnswer);
         }
            
            let ageAnswer = personAge ();
            if(ageAnswer==""){
               personInfo.push("invalid");
            }
            else if(ageAnswer<=0){
               while (ageAnswer<=0)
            {
                alert("The age you entered is less than or equal zero.. try again");
                         ageAnswer = personAge (); 
            }
            personInfo.push(ageAnswer);
            }
            else{
               personInfo.push(ageAnswer);
            }

            let ifStudentAnswer = ifStudent();
            if(ifStudentAnswer==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifStudentAnswer);
            }

            let ifEmployeeAnswer = ifEmployee ();
            if(ifEmployeeAnswer==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifEmployeeAnswer);
            }

            let ifSatisfiedAnswer = ifSatisfied ();
            if(ifSatisfiedAnswer==""){
               personInfo.push("invalid");
            }
            else{
               personInfo.push(ifSatisfiedAnswer);
            }
            
                    let welcomeConfirmAnswer = welcomeMessage ();
                    if(welcomeConfirmAnswer == false){
                    if(genderAnswer == "female"){
                       alert("Welcome to ToDo webapp Ms "+nameAnswer);
                    }
                    else if(genderAnswer == "male"){
                        alert("Welcome to ToDo webapp Mr "+nameAnswer);
                    }
                    else{
                       alert("Welcome to ToDo webapp "+nameAnswer);
                    }
                  }

                  printPersonInfo();
   }
   else{
      let nameAnswer = personName ();
   personInfo.push(nameAnswer);
   
   let genderAnswer = personGender ();
   if(genderAnswer==""){
      personInfo.push("invalid");
   }
   else{
      personInfo.push(genderAnswer);
   }
   
   
   let ageAnswer = personAge ();
   if(ageAnswer==""){
      personInfo.push("invalid");
   }
   else if(ageAnswer<=0){
      while (ageAnswer<=0)
   {
       alert("The age you entered is less than or equal zero.. try again");
                ageAnswer = personAge (); 
   }
   personInfo.push(ageAnswer);
   }
   else{
      personInfo.push(ageAnswer);
   }

   let ifStudentAnswer = ifStudent();
   if(ifStudentAnswer==""){
      personInfo.push("invalid");
   }
   else{
      personInfo.push(ifStudentAnswer);
   }

   let ifEmployeeAnswer = ifEmployee ();
   if(ifEmployeeAnswer==""){
      personInfo.push("invalid");
   }
   else{
      personInfo.push(ifEmployeeAnswer);
   }

   let ifSatisfiedAnswer = ifSatisfied ();
   if(ifSatisfiedAnswer==""){
      personInfo.push("invalid");
   }
   else{
      personInfo.push(ifSatisfiedAnswer);
   }
   
           let welcomeConfirmAnswer = welcomeMessage ();
           if(welcomeConfirmAnswer == false){
           if(genderAnswer == "female"){
              alert("Welcome to ToDo webapp Ms "+nameAnswer);
           }
           else if(genderAnswer == "male"){
               alert("Welcome to ToDo webapp Mr "+nameAnswer);
           }
           else{
              alert("Welcome to ToDo webapp "+nameAnswer);
           }
         }
                
                  printPersonInfo();
        
     
   }


   function printPersonInfo(){

      for(let i=0; i< personInfo.length; i++){  
         console.log(personInfo[i]);  
         }  

   }

   function personName (){
    let nameInput= prompt("Enter your name please");
   return nameInput;
   }
   
   function personGender (){
      let genderInput = prompt ("Enter your gender please, The answer should be either (male or female)");
     return genderInput;
     }

     function personAge (){
      let ageInput = prompt ("Enter your age please");
     return ageInput;
     }

     function ifStudent (){
      let ifStudentInput = prompt("Are you a student?, The answer should be either (yes or no)");
     return ifStudentInput;
     }

     function ifEmployee (){
      let ifEmployeeInput = prompt("Are you an employee?, The answer should be either (yes or no)");
     return ifEmployeeInput;
     }

     function ifSatisfied (){
      let ifSatisfiedInput = prompt("Are you satisfied from ToDo webapp?, The answer should be either (yes or no)");
     return ifSatisfiedInput ;
     }

     function welcomeMessage (){
      let welcomeConfirmInput = confirm("Do you want to skip the welcoming message?")
     return welcomeConfirmInput ;
     }

     