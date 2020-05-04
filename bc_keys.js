"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Ian Kwuan
   Date: 4/27/20  

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

//Adding event listeners for functions findKeyWords and makeKeyStyles
window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

//Defining the findKeyWords function, which creates the keywords and lists them in the keyword box
function findKeyWords() {
    
    //Defining variable keyWordBox as an aside element, setting its ID to "keywords"
    var keyWordBox = document.createElement("aside");
    keyWordBox.setAttribute("id","keywords");
    
    //Defining variable keyWordTitle as an h1 element, setting its inner HTML to the text string "Keyword List"
    var keyWordTitle = document.createElement("h1");
    keyWordTitle.innerHTML = "Keyword List";
    
    //Appending keyWordTitle to keyWordBox as a child node
    keyWordBox.appendChild(keyWordTitle);
    
    //Defining variable keyWordList as an ordered list, making it a child of keyWordBox
    var keyWordList = document.createElement("ol");
    keyWordBox.appendChild(keyWordList);
    
    /*
    Extracting dfn elements from bc_fed.html and storing them into the array keyWordElems
    Creating an array with a length equal to keyWordElems called keyWords
    */
    var keyWordElems = document.querySelectorAll("article#doc dfn");
    var keyWords = new Array(keyWordElems.length);
    
    //Generating keywords and their respective IDs to be placed inside the Keyword Box
    for (var i = 0; i < keyWordElems.length; i++) {
        
        //Assigning the text content of the number i value of keyWordElems to the number i value of keyWords
        keyWords[i] = keyWordElems[i].textContent;
        
        //Defining variable linkID with the replaceWS function
        var linkID = replaceWS(keyWords[i]);
        linkID = "keyword_" + linkID;
        
        //Assigning IDs to the values of the keyWordElems array with their respective linkID
        keyWordElems[i].setAttribute("id","keyword_" + linkID);
        }
    
    //Sorting keywords alphabetically
    keyWords.sort();
    
    //Creating hyper-reference links for keywords in the document using a for loop
    for (var i = 0; i < keyWords.length; i++) {
        
        /*
        Defining variable keyWordListItem as an li element
        Defining keyWordLink as an a element
        Setting the inner HTMl of keyWordLink to the number i value of keyWords
        */
        var keyWordListItem = document.createElement("li");
        var keyWordLink = document.createElement("a");
        keyWordLink.innerHTML = keyWords[i];
        
        //Defining variable linkID with the replaceWS function
        var linkID = replaceWS(keyWords[i]);
        linkID = "#" + "keyword_keyword_" + linkID;
        
        //Creating hyper-reference attributes for key words, assigning values of their respective linkID
        keyWordLink.setAttribute("href",linkID);
        
        /*
        Defining keyWordLink as a child of keyWordListItem
        Defining keyWordListItem as a child of keyWordList
        */
        keyWordListItem.appendChild(keyWordLink);
        keyWordList.appendChild(keyWordListItem);
        }
    
    /*
    Defining the article element with ID "doc" as variable historyDoc
    Placing keyWordBox before the first child of historyDoc to make it the new first child 
    */
    var historyDoc = document.getElementById("doc");
    historyDoc.insertBefore(keyWordBox, historyDoc.firstChild);
    
}

//Defining the makeKeyStyles function which creates the stylesheet
function makeKeyStyles() {
    var keyStyles  = document.createElement("style");
    document.head.appendChild(keyStyles);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords { \
            border: 3px solid rgb(101, 101, 101); \
            float: right; \
            margin: 20px 0px 20px 20px; \
            padding: 10px; \
            width: 320px; \
        }",0);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords h1 { \
            font-size: 2em; \
            margin: 5px; \
            text-align: center; \
        }", 1);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords ol { \
            margin-left: 20px; \
            font-size: 1.2em; \
        }", 2);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords ol li { \
            line-height: 1.5em; \
        }", 3);
    
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "aside#keywords ol li a { \
            color: rgb(101, 101, 101); \
            text-decoration: none; \
        }", 4);
}

/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
