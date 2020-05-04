"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Ian Kwuan
   Date: 4/12/20  

	
*/

/*
Establishing initial values for variables:
A date for thsiDay
The start of a table for tableHTML
Final date 14 days after thisDay for endDate
*/
var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

//Building table using a for loop
for (var i = 0; i < eventDates.length; i++) {
    /*
    Declaring variables:
    eventDate stores values of the eventDates array
    eventDay stores the date from eventDate in a string
    eventTime stores the time from eventDate using local conventions
    */
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();
    
    /*
    if conditional statement to test for whether the current day is less than the following event date and
    for whether that event date is before the final date of the period
    */
    if ((thisDay <= eventDate) && (eventDate <= endDate)) {
        tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] + "</td></tr>";
    }
}

//Adding in the closing tag for the table
tableHTML += "</table>";
//Inserting completed table into the HTML document
document.getElementById("eventList").innerHTML = tableHTML;