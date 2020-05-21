/*
* File: Animator.js
*
* Description: This is the Parent Class that all specific animations will
* Inherit from. I am still in the process of determining what properties
* and methods I want all my js animations to share. This class is incomplete.
* Pleas view ParallaxAnimation.js or Typewriter.js for completed animation
* classes
*
*
*
*/

export default class Animator {
	constructor(name) {
		this._name = name;
		console.log("constructed");
		//add to this later, maybe position/dimensions would be good
	}

	update() {
		//what needs to happen everytime an animation is updated?
		//ie move it around if screen was resized
		//console.log("update");
	}

	draw() {
		//what needs to happen everytime an animation is drawn?
		//console.log("draw");
	}


}