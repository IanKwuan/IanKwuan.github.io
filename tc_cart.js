"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Ian Kwuan
   Date: 4/12/20  
   
   Filename: tc_cart.js
	
*/

/*
    Creating variable to store the total amount of the order
    Beginning HTML of table that will be constructed with Javascript
*/
var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//for loop constructing the table with the array values from tc_order.js
for (var i = 0; i < item.length; i++) {
    
    //Constructing the table with array values of index i
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
    
   /*
        Determining total cost based on item and quantity
        Creating table cell to display cost for ordered items
        Storing the order total in orderTotal variable
   */
    var itemCost = (itemPrice[i] * itemQty[i]);
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal += itemCost;
}
     
/*
    Completing the table by inserting the subtotal amount
    Putting the contents of cartHTML into the inner HTML of the div element with ID "cart" 
*/
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";
document.getElementById("cart").innerHTML = cartHTML;