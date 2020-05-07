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