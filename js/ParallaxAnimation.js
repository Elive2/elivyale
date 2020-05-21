/* File ParallaxAnimation.js
*
* Author: Eli Yale
*
* Date Modified: 03/04/2020
*
* Description: This file contains an extension of the Animator class
* for parralax (scroll based) animations. The movement of elements
* depend on the scroll position. Thus you need a mechanism to manage
* the scroll perecntage and this is handled in index.js. This class
* takes several parameters to describe the motion in the constructor,
* see the function for more info. The scroll percentage most be passed
* to the update function.
*
* Todo: 
* [ ] - Add linear Interpretation to smooth out the animations
* [ ] - pass in a function for nonlinear animation
* 
*/

import Animator from './Animator.js'

export default class ParallaxAnimation extends Animator {
	constructor(name, element, startPercent, startX, startY, endPercent, endX, endY, containerHeight, viewWidth) {
		super(name);

		//thigs that could be moved to parent class
		this._element = element; //exact dom div that will move
		this._startX = startX;
		this._startY = startY;
		this._endX = endX;
		this._endY = endY;
		this._diffX = endX - startX;
		this._diffY = endY - startY;

		//things that are unique to parallax
		this._startPercent = startPercent;
		this._endPercent = endPercent;
		this._diffPercent = endPercent - startPercent;

		let pre = this.prefix();
		this._jsPrefix = pre.lowercase;
		if(this._jsPrefix == 'moz') this._jsPrefix = 'Moz';
		console.log(this._jsPrefix);

		//Recompute style, inital values are given in css in case js is disabled
		//if js is enabled, then we set the inital position here
		console.log(containerHeight)
		console.log(containerHeight * startY)
		console.log((startY * 100).toFixed(2) + '%');
		this._element.style['top'] = (startY * 100) + '%';
		this._element.style['left'] = (startX * 100) + '%';

	}

/*********************Overrides********************/

	update(scrollPercent) {
		//console.log("scroll percent" + scrollPercent);
		if(scrollPercent <= this._startPercent) {
			//the element should not start moving yet
			//so assign it the inital position
			

		} else if(scrollPercent <= this._endPercent) {
			//the element should be moving
			
			let newX = this._diffX*((scrollPercent - this._startPercent) / this._diffPercent);
			let newY = this._diffY*((scrollPercent - this._startPercent) / this._diffPercent);
			//this._element.style.top = (newY * 100).toFixed(2) + '%';
			//this._element.style.left = (newX * 100).toFixed(2) + '%';
			this._element.style[this._jsPrefix+'Transform'] = 'translate3d(' + (newX * 100).toFixed(2) + '%, ' + (newY * 100).toFixed(2) + '%, 0px)';

		}
		else {
			//the element motion has ended and it should remain stationary
			
		}
		

	}

	//there is no draw for these guys, they are css animations
	draw() {
		console.log("draw");
	}

	prefix() {
		var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
				.call(styles)
				.join('')
				.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];

		return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		};
	}	
}

