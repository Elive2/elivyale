export default class FixedAnimation {
	constructor(name=null, startHeight=100, startWidth=100, startX=0, startY=0, endHeight=100, 
		endWidth=100, endX=0, endY=0, speed=1, anchor=null, divElement=null, repeat=false, parallax = false, 
		startPercent=null, endPercent=null) {

		this._name = name;
		this._startHeight = startHeight;
		this._startWidth = startWidth;
		this._startX = x;
		this._startY = y;
		this._endHeight = endHeight;
		this._endWidth = endWidth;
		this._endX = endX;
		this._ednY = endY;
		this._speed = speed;
		this._anchor = anchor;
		this._divElement = null;
		this._repeat = repeat;
		this._move = move;

		if (parallax) {
			this._parallax = true;
			this._startPercent = startPercent;
			this._endPercent = endPercent;
		}
	}

	update() {
		//console.log("update");
	}

	draw() {
		//console.log("draw");
	}


}