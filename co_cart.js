"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Ian Kwuan
   Date: 5/8/20  
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

//Adding an event listener to consistently update the cost calculations when something is changed
window.addEventListener("load", function() {
    
    //Runs the calculation function
    calcCart;
    
    //Runs the calculation function upon a change to the quantity
    orderForm.elements.modelQty.onchange = calcCart;
    
    //Runs the calculation function upon clicking a different shipping option
    var shippingType = document.querySelectorAll('input[name="shipping"]');
    for (var i = 0; i < shippingType.length; i++) {
        shippingType[i].onclick = calcCart;
        }
})

//Declaring orderForm variable    
var orderForm = document.forms.cart;

//Defining calculation function
function calcCart() {
    
    //Defining the cost of the machine model as a variable
    var modelCost = orderForm.elements.modelCost.value;
    
    //Creating array from the values of the quantity option
    //Using array to extract a value with its index
    var qIndex = orderForm.elements.modelQty.selectedIndex;
    var Qty = orderForm.elements.modelQty[qIndex].value;
    
    //Defining the orderCost variable
    //Displaying orderCost in the orderCost input in terms of US currency
    var orderCost = modelCost*Qty;
    orderForm.elements.orderCost.value = formatUSCurrency(orderCost);
    
    //Defining shipCost variable as the checked shipping option
    //Displaying the cost of the checked shipping option in the shippingCost input to two decimal places
    var shipCost = document.querySelector('input[name="shipping"]:checked').value;
    orderForm.elements.shippingCost.value = "$" + formatNumber(shipCost, 2);
    
    //Calculating subtotal, displaying it in the subTotal input to two decimal places
    var subTotal = orderCost * 1 + shipCost * 1
    orderForm.elements.subTotal.value = "$" + formatNumber(subTotal, 2);
    
    //Calculating sales tax, displaying it in the salesTax input to two decimal places
    var salesTax = 0.05 * subTotal;
    orderForm.elements.salesTax.value = "$" + formatNumber(salesTax, 2);
    
    //Calculating the cart total and displaying it in the cartTotal input in termsof US currency
    orderForm.elements.cartTotal.value = formatUSCurrency(orderCost * 1 + shipCost * 1 + salesTax * 1);
    
    //Displaying the text string of the selected shipping option in a hidden field
    orderForm.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
} 




function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
