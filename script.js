var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

	var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

	var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] ;

	function calculateDayValue(){
	var date = document.getElementById("input-date").value;
	var DD,MM,CC,YY;weekday;

	DD=parseInt(date.slice(0,2));
	
	MM=parseInt(date.slice(3,5));

	CC=parseInt(date.slice(6,8));

	YY=parseInt(date.slice(8,10));



	weekday = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;

	console.log(weekday);
  	return (Math.floor(weekday));
	}
	function getGender(){
  	var genders = document.getElementsById("form-check gender");
  	if(form-check gender[0].checked == true){
    var gender = "male";
  	}
  	else if(form-check gender[1].checked == true){
    var gender = "female";
  	}
  	else{
    return false;
  	}   ;



	 switch(form-check gender){
    case "male":
      if (dayValue == 1 ){
        alert("You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]+"!");
      }
      else if(dayValue == 2){
        alert("You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]+"!");
      }
      else if(dayValue == 3){
        alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]+"!");
      }
      else if(dayValue == 4){
        alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]+"!");
      }
      else if(dayValue == 5){
        alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]+"!");
      }
      else if(dayValue == 6){
        alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]+"!");
      }
      else if(dayValue == -0){
        alert("You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]+"!");
      }

    break;

    case "female":
      if (dayValue == 1){
        alert("You were born on "+dayNames[0] + " and Your akan name is  " +femaleNames[0]+"!");
      }
      else if(dayValue == 2){
        alert("You were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1]+"!");
      }
      else if(dayValue == 3){
        alert("You were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2]+"!");
      }
      else if(dayValue == 4){
        alert("You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3]+"!");
      }
      else if(dayValue == 5){
        alert("You were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4]+"!");
      }
      else if(dayValue == 6){
        alert("You were born on " +dayNames[5] + " and Your akan name is " + femaleNames[5]+"!");
      }else if(dayValue == -0){
        alert("You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6]+"!");
      }

      function findName(){
    //validate();
  		dayValue = calculateDayValue();
  		getGender();
	}
