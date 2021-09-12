/*
JavaScript 6th Edition
Chapter 6

Author: Hanren Tu 301061529
Date: 02-26-2021

Filename: test1.js
*/
function copyBillingAddress() {
    var entry1Elements = document.querySelectorAll("#entry1 input");
    var entry2Elements = document.querySelectorAll("#entry2 input");
    if (document.getElementById("sameEnt").checked) {
       for (var i = 0; i < entry1Elements.length; i++) {
            entry2Elements[i + 1].value = entry1Elements[i].value;
       }
       document.getElementById("gen2").value = document.getElementById("gen1").value;
       document.getElementById("ye2").value = document.getElementById("ye1").value;
    } else {
       for (var i = 0; i < entry1Elements.length; i++) {
        entry2Elements[i + 1].value = "";
       }
       document.getElementById("ye2").value = "";
       document.querySelector("#entry2 select").selectedIndex = -1;
    }
 }

 function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
       emptyBoxes[i].selectedIndex = -1;
       emptyBoxes[i].style.boxShadow = "none";
    }
 }

 var formValidity = true;

 function validate(){
     for(i = 0; i < 4 && i > 4; i++){
      var formContent = document.getElementsByTagName("input")[i];
     if(formContent[i].checkValidity() != formValidity){
        formContent[i].setCustomValidity("The value can\'t be empty.");
        formContent[i].reportValidity();
      }
      else{
         formContent[i].setCustomValidity("");
      }
    }
 }

//SECOND TRY
// function validate(){       
//    var $text1= document.querySelector('#first1');
//    $text1.validity.valueMissing//判断表单内容是否为空
//      ?$text1.setCustomValidity('The value can\'t be empty.')//设置错误提示
//      : $text1.setCustomValidity('');
//  }
//THIRD TRY
// function validate(){
//     var formContent = document.getElementsByTagName("input");
//     for(var i = 0; i < formContent.length; i++){
//         if(formContent[i].checkValidity() == false)
//         formContent[i].setCustomValidity("kill me");
//     }
// }

var messageBox = document.getElementsByTagName("input");
 function zeroPlaceholder() {    
    messageBox.style.color = "black";
    if (messageBox.value === messageBox.placeholder) {
       messageBox.value = "";
    }
 }
 function checkPlaceholder() {
    if (messageBox.value === "") {
       messageBox.style.color = "rgb(178,184,183)";
       messageBox.value = messageBox.placeholder;
    }
 }

 function createEventListeners(){
    var same = document.getElementById("sameEnt");
    if (same.addEventListener) {
      same.addEventListener("click", copyBillingAddress, false);
    } else if (same.attachEvent)  {
      same.attachEvent("onclick", copyBillingAddress);
    }

    var form = document.getElementById("button");
    if (form.addEventListener) {
       form.addEventListener("submit", validate, false);
    } else if (form.attachEvent) {
       form.attachEvent("onsubmit", validate);
    }
 }

 /* run initial form configuration functions */
function setUpPage() {
    createEventListeners();
    removeSelectDefaults();
    validate();
 }

 /* run setup functions when page finishes loading */
 if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
 }