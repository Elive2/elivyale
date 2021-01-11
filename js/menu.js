/*
* File: menu.js
*
* Author: Eli Yale
*
* Description:
* Responsive nav menu functionality
*/

function menuClicked() {
  var x = document.getElementById("navbarID");
  if (x.className === "navbar") {
    x.className += " responsive-nav";
  } else {
    x.className = "navbar";
  }
}