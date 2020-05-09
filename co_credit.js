"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assignment

   Credit Card Form Script
   
   Author: Ian Kwuan
   Date: 5/8/20  
   
   Filename: co_credit.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateDate()
      Validates that the user has entered a valid expiration date for the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

/*
Adding an event listener to extract, decode, and reformat URI component,
since the form information is stored in the URL,
creating an array from the form information taken from the URL,
then displaying some of the array values in inputs
(This is shown as the information of what the customer ordered on the previous page)
*/
window.addEventListener("load", function() {
    var orderData = location.search.slice();
    orderData = orderData.replace(/\+/g," ");
    orderData = decodeURIComponent(orderData);
    
    var orderFields = orderData.split(/[&=]/g);
    
    orderForm.elements.modelName.value = orderFields[3];
    orderForm.elements.modelQty.value = orderFields[5];
    orderForm.elements.orderCost.value = orderFields[7];
    orderForm.elements.shippingType.value = orderFields[9];
    orderForm.elements.shippingCost.value = orderFields[13];
    orderForm.elements.subTotal.value = orderFields[15];
    orderForm.elements.salesTax.value = orderFields[17];
    orderForm.elements.cartTotal.value = orderFields[19];
})

//Adding an event listener to run validation tests at the moment the submit button is clicked
window.addEventListener("load", function() {
    
    //Defining the submit button as the variable subButton
    //Running the runSubmit function as soon as the submit button is clicked
    var subButton = document.getElementById("subButton");
    subButton.onclick = runSubmit;
    
    //Runs all these validation tests when the submit button is clicked
    creditForm.elements.cardHolder.onchange = validateName;
    creditForm.elements.cardNumber.onchange = validateNumber;
    creditForm.elements.expDate.onchange = validateDate;
    creditForm.elements.cvc.onchange = validateCVC;
})

/*
Defining the orderForm variable as the order form on the page
Defining the creditForm variable as the credit form on the page
*/
var orderForm = document.forms.order;
var creditForm = document.forms.credit;

//Defining the runSubmit function
function runSubmit() {
    //Runs all these validation tests
    validateName;
    validateCredit;
    validateNumber;
    validateDate;
    validateCVC;
}

//Defining the validateDate function to validate a given expiration date
function validateDate() {
    
    //Defining the expDate function as the input with ID "expDate"
    var expDate = document.getElementById("expDate");
    
    //Running an if-else conditional statement to test the inputted date
    if (expDate.validity.valueMissing) {
        expDate.setCustomValidity("Enter the expiration date");
    } else if (/^(0[1-9]|1[0-2])\/20[12]\d$/.test(expDate.value) === false) {
        expDate.setCustomValidity("Enter a valid expiration date");
    } else {
        expDate.setCustomValidity("");
    }
}




/* Functions already provided in the file */

function validateName() {
   var cardName = document.getElementById("cardHolder");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter the card holder");
   } else {
      cardName.setCustomValidity("");
   }
}


function validateCredit() {
   var creditCard = document.forms.credit.elements.company[0];
   if (creditCard.validity.valueMissing) {
      creditCard.setCustomValidity("Select your credit card");
   } else {
      creditCard.setCustomValidity("");
   }
}

function validateNumber() {
   var cardNumber = document.getElementById("cardNumber");
   if (cardNumber.validity.valueMissing) {
      cardNumber.setCustomValidity("Enter your card number");
   } else if (cardNumber.validity.patternMismatch) {
      cardNumber.setCustomValidity("Enter a valid card number");
   } else if (luhn(cardNumber.value) === false) {
      cardNumber.setCustomValidity("Enter a legitimate card number");
   } else {
      cardNumber.setCustomValidity("");
   }
}

function validateCVC() {
   var cardCVC = document.getElementById("cvc");
   var creditCard = document.querySelector('input[name="company"]:checked').value;
   
  if (cardCVC.validity.valueMissing) {
    cardCVC.setCustomValidity("Enter your code CVC number");
   } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
   cardCVC.setCustomValidity("Enter a 4-digit CVC number");
  } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
   cardCVC.setCustomValidity("Enter a 3-digit CVC number");
  } else {
   cardCVC.setCustomValidity("");
  }
}

function sumDigits(numStr) {
   var digitTotal = 0;
   for (var i = 0; i < numStr.length; i++) {
      digitTotal += parseInt(numStr.charAt(i));
   }
   return digitTotal;
}

function luhn(idNum) {
   var string1 = "";
   var string2 = "";
   
   // Retrieve the odd-numbered digits
   for (var i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits and double them
   for (var i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
}
