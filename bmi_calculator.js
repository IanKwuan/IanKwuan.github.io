"use strict";

/*
    Project 6 - BMI Calculator
    By Ian Kwuan
    Date: 3/4/20
*/

function calcBMI() {
    //get height in feet, height in inches, weight from form and store in 3 variables feet, inches, weight
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    var weight = document.getElementById("weight").value;
    
    //convert height in feet and inches to total inches and store in another variable height
    var height = (feet * 12) + (inches * 1);
    
    //calculate bmi using the formula, store in a variable called bmi
    var bmi = (weight * 703) / (height ** 2);
    
    //display bmi on the html page
    document.getElementById("return").innerHTML = bmi ;
}

function reset() {
    //set the values of the inputs to "" and change the content of the return to "Appears here"
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("return").innerHTML = "(Appears here)";
}