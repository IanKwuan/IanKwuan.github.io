"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Ian Kwuan
   Date: 3/12/20  

*/


//Running the showClock function, make it repeat every second
showClock();
setInterval("showClock()", 1000);

function showClock() {
    //Defining the current date and time, making variables to store the texts of the date and time using local conventions
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

    //Display the local date and time on the HTML page
    document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";
    
    //Changing the hours of the time of the fireworks from 9 AM to 9 PM on July 4th
    var j4Date = nextJuly4(thisDay);
    j4Date.setHours(21);
    
    //Calculating the number of days laft
    var days = (j4Date - thisDay)/(1000*60*60*24);
    
    //Calculating the number of hours, minutes, and seconds left    
    var hrs = (days - Math.floor(days))*24;
    var mins = (hrs - Math.floor(hrs))*60;
    var secs = (mins - Math.floor(mins))*60;
    
    //Displaying the days, hours, minutes, and seconds left on the webpage after rounding them down to the next lowest integer
    document.getElementById("dLeft").textContent = Math.floor(days);
    document.getElementById("hLeft").textContent = Math.floor(hrs);
    document.getElementById("mLeft").textContent = Math.floor(mins);
    document.getElementById("sLeft").textContent = Math.floor(secs) + 1;
    //Added 1 to the seconds value to sync up the countdown with the real time (which it didn't do before)
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}