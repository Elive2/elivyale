/* File: Typewriter.js
*
* Author: Eli Yale
*
* Date Modified: 03/04/2019
*
* Description: This file contains the Typewriter class
* which is a simple animation to create a typewriter effect
* including typing and deleting words with a blkingin cursor
* and enclosing brackets. The class needs an html canvas to attach
* to which is passed into this constructor. You can modify the type
* and delete speeds and cursor speeds, and you can set what words
* to type by passing in an array of strings to the constructor
*/

import Animator from './Animator.js'

export default class Typewriter extends Animator {
	_count = 0; //count of letters on screen
	_wordNum = 0; //index of current word being printed
	_text = ""; //acutal text to currentyl print
	_chars = ""; //chars printed so far, this is appended to
	_type = true; //boolean to track wether we are typing or deleting
	_cursorBlink = true; //boolean wether or not cursor shoudl blink

	//position of cursor, origin is top left corner
	_cursorX = 10;
	_cursorY = 10;

	constructor(canvas, font, words, typeSpeed, deleteSpeed, cursorSpeed) {
		super(); //fill this in as you modify Animator constructor
		this._canvas = canvas;
		this._ctx = this._canvas.getContext("2d");
		this._ctx.font = font;
		this._words = words; //array of strings for the words to print
		this._typeSpeed = typeSpeed;
		this._deleteSpeed = deleteSpeed;
		this._cursorSpeed = cursorSpeed;
	}

	start() {
		this._ctx.fillStyle = "#E1DDC4";
		this._ctx.fillRect(0,0, this._canvas.width, this._canvas.height);

		this._lastCharUpdate = performance.now();
		this._lastCursorUpdate = performance.now();
	}

	typeChars() {
		this._text = this._words[this._wordNum];
		
		this._count++;
		this._chars = this._text.substr(0, this._count);
		if(this._count > this._text.length) {
			this._type = false;;
		}


		this._cursorX = this._ctx.measureText(this._chars).width + 10;
	}

	deleteChars() {
		this._text = this._words[this._wordNum];

		this._count--;
		this._chars = this._text.substr(0,this._count);
		if(this._count < 1) {
			this._type = true;
			//finished deleting word, swith to next word
			this._wordNum = (this._wordNum + 1) % this._words.length;

		}

		//update the cursrors x position based on change
		this._cursorX = this._ctx.measureText(this._chars).width + 10;
	}

	updateCursor() {
		this._cursorBlink = !this._cursorBlink;
	}

	//called every frame, chars to draw are determined by intervals
	drawChars() {
		this._ctx.fillStyle = "black"
		this._ctx.fillText(this._chars, 20, 30);
		//cursorX = ctx.measureText(chars);
		//console.log(ctx.measureText(chars))
	}

	//called via an interval set in init
	drawCursor() {
		if(this._cursorBlink){
			this._ctx.fillStyle = "tomato";
			this._ctx.fillRect(this._cursorX,this._cursorY, 10, 20);
		}
	}

	drawBrackets() {
		this._ctx.fillStyle = "#9FD2F0";
		this._ctx.fillRect(5, 5, 5, 35);
		this._ctx.fillRect(5, 5, 15, 5);
		this._ctx.fillRect(5, 35, 15, 5);
		this._ctx.fillRect(140, 5, 5, 30);
		this._ctx.fillRect(130, 5, 15, 5);
		this._ctx.fillRect(130, 35, 15, 5);
	}

/*********************Overrides********************/
	update() {
		super.update();
		this._ctx.clearRect(0,0, this._canvas.width, this._canvas.height);
		let now = performance.now();

		if(this._type) {
			if(now > this._lastCharUpdate + this._typeSpeed) {
				this.typeChars();
				this._lastCharUpdate = performance.now();
			}
		}
		else {
			if(now > this._lastCharUpdate + this._deleteSpeed) {
				this.deleteChars();
				this._lastCharUpdate = performance.now();
			}
		}

		
		if(now > this._lastCursorUpdate + this._cursorSpeed) {
			this.updateCursor();
			this._lastCursorUpdate = performance.now();
		}
		
	}

	draw() {
		super.draw();
		this.drawChars();
		this.drawCursor();
		this.drawBrackets();

	}
}