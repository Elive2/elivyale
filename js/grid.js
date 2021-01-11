/*
File: ./js/grid.js

Author: Eli Yale

Description:
Implements a simple expandable grid to display
my experience
*/

let grid = document.getElementById("exp-grid");

function plusClicked(GridItemID) {
	let element = document.getElementById(GridItemID);

	let body = element.querySelector('.grid-item-body');
	let plusButton = element.querySelector('.plus');
	let secondSpan = plusButton.childNodes[1];
	if (body.classList.contains("grid-item-active")) {
		body.classList.remove("grid-item-active");
		secondSpan.classList.remove("button-clicked");
		secondSpan.style.left = "25%";
		secondSpan.style.right = "25%";
		plusButton.style.webkitTransform = "rotate(180deg)";

	}
	else {
		body.classList.add("grid-item-active");
		secondSpan.style.left = "50%";
		secondSpan.style.right = "50%";
		plusButton.style.webkitTransform = "rotate(90deg)";

	}
};