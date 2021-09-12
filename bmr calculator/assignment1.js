function CalculateBmr(){
    var bmr, tee; 
    var pal = 0;
    var weight1 = document.getElementById("weight1").value;
    var height1 = document.getElementById("height1").value;
    var weight2 = document.getElementById("weight2").value;
    var height2 = document.getElementById("height2").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var metric = document.getElementById("metric");
    var imperial = document.getElementById("imperial");

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");

    if(metric.checked && gender == "Male"){
        bmr = 66.5 + (13.75 * weight1) + (5.003 * height1) - (6.755 * age);
    }
    else if(metric.checked && gender == "Female"){
        bmr = 655 + (9.563 * weight1) + (1.850 * height1) - (4.676 * age);
    }
    else if(imperial.checked && gender == "Male"){
        bmr = 66 + (6.2 * weight2) + (12.7 * height2) - (6.76 * age);
    }
    else if(imperial.checked && gender == "Female"){
        bmr = 655 + (4.35 * weight2) + (4.7 * height2) - (4.7 * age);
    }
    /*
    (metric.checked && gender == "Male") ? bmr = 66.5 + (13.75 * weight1) + (5.003 * height1) - (6.755 * age) : 655 + (9.563 * weight1) + (1.850 * height1) - (4.676 * age);
    (metric.checked && gender == "Female") ? bmr = 655 + (9.563 * weight1) + (1.850 * height1) - (4.676 * age) : 66.5 + (13.75 * weight1) + (5.003 * height1) - (6.755 * age);
    (imperial.checked && gender == "Male") ? bmr = 66 + (6.2 * weight2) + (12.7 * height2) - (6.76 * age) : 655 + (4.35 * weight2) + (4.7 * height2) - (4.7 * age);
    (imperial.checked && gender == "Female") ? bmr = 655 + (4.35 * weight2) + (4.7 * height2) - (4.7 * age) : 66 + (6.2 * weight2) + (12.7 * height2) - (6.76 * age);
    */
    (activityLevel1.checked) ? (pal += 1.53) : (pal += 0);
    (activityLevel2.checked) ? (pal += 1.76) : (pal += 0);
    (activityLevel3.checked) ? (pal += 2.25) : (pal += 0);
    tee = bmr * pal;
                                                            //bmr.tofix(2)
    alert(gender + "\n" + "Your BMR is: " + (Math.round(bmr*100)/100) + ".\n" +
                          "Your TEE is: " + (Math.round(tee*100)/100) + ".");  

    //document.write(gender + "<p>Your BMR is: " + (Math.round(bmr*100)/100) + ".</p>"  + 
                           // "<p>Your TEE is: " + (Math.round(tee*100)/100) + ".</p>");
}
document.getElementById("calcu").addEventListener("click", CalculateBmr,false);

//Hanren Tu 301061529