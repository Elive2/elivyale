/*
* File: index.js
*
* Description: main js file that has the principal
* animation/draw loop. Sepcialized animations are 
* imported from other files. All dom collecting is done
* in this file, ie none should be called in classes
*
*/

import Typewriter from './Typewriter.js'
import ParallaxAnimation from './ParallaxAnimation.js'

//parallax variables
var scrollOffset = 0;
var scrollPercent = 0;
var scrollHeight = 0;
//all animations are contained within the svg container
var containerHeight = document.getElementById("svg-container").offsetHeight;
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;


//animation instances
//constructor(name, element, 
//	startPercent, startX, startY, endPercent, endX, endY, containerHeight, viewWidth)
const typewriterCanvas = document.getElementById("typewriter"); 
const words = ["Climber", "Skier", "Musician", "Diver", "slackliner"];
const typewriter = new Typewriter(typewriterCanvas, "25px Georgia", words, 250, 150, 500);

const mountains1El = document.getElementById("mountains1");
const parallaxMountains1 = new ParallaxAnimation("mountains1", mountains1El,
	0.05, 0, 0.068, 0.08, 0.0, 0.15, containerHeight, viewWidth);

const mountains2El = document.getElementById("mountains2");
const parallaxMountains2 = new ParallaxAnimation("mountains2", mountains2El,
	0.05, 0, 0.068, 0.08, 0.0, 0.15, containerHeight, viewWidth);

const mountains3El = document.getElementById("mountains3");
const parallaxMountains3 = new ParallaxAnimation("mountains3", mountains3El,
	0.05, 0, 0.068, 0.08, 0.0, 0.15, containerHeight, viewWidth);

const lakeEl = document.getElementById("lake");
const parallaxLake = new ParallaxAnimation("lake", lakeEl,
	0.05, 0, 0.068, 0.08, 0.0, 0.15, containerHeight, viewWidth);

const riverEl = document.getElementById("river");
const parallaxRiver = new ParallaxAnimation("river", riverEl,
	0.05, 0, 0.068, 0.08, 0.0, 0.15, containerHeight, viewWidth);

const cliff1El = document.getElementById("cliff1");
const parallaxCliff1 = new ParallaxAnimation("cliff1", cliff1El);

const cliff2Eli = document.getElementsById("cliff2");
const parallaxCliff2 = new ParallaxAnimation("cliff2", cliff2El);

const trees1El = document.getElementById("trees1");
const parallaxTree1 = new ParallaxAnimation("trees1", trees1El,
	0.12, 0.0, 0.15, 0.182, -0.2, 0.15, containerHeight, viewWidth);

const trees2El = document.getElementById("trees2");
const parallaxTree2 = new ParallaxAnimation("trees2", trees2El,
	0.12, 0.15, 0.15, 0.178, -0.2, 0.15, containerHeight, viewWidth);

const trees3El = document.getElementById("trees3");
const parallaxTree3 = new ParallaxAnimation("trees3", trees3El,
	0.12, 0.65, 0.15, 0.185, 0.9, 0.15, containerHeight, viewWidth);

const trees4El = document.getElementById("trees4");
const parallaxTree4 = new ParallaxAnimation("trees4", trees4El,
	0.12, 0.6, 0.15, 0.17, 1.0, 0.15, containerHeight, viewWidth);

const trees5El = document.getElementById("trees5");
const parallaxTree5 = new ParallaxAnimation("trees5", trees5El,
	0.12, 0.6, 0.15, 0.17, 1.0, 0.15, containerHeight, viewWidth);

const trees6El = document.getElementById("trees6");
const parallaxTree6 = new ParallaxAnimation("trees6", trees6El,
	0.12, 0.6, 0.15, 0.17, 1.0, 0.15, containerHeight, viewWidth);

const trees7El = document.getElementById("trees7");
const parallaxTree7 = new ParallaxAnimation("trees7", trees7El,
	0.12, 0.6, 0.15, 0.17, 1.0, 0.15, containerHeight, viewWidth);

const trees8El = document.getElementById("trees8");
const parallaxTree8 = new ParallaxAnimation("trees8", trees8El,
	0.12, 0.6, 0.15, 0.17, 1.0, 0.15, containerHeight, viewWidth);

function draw() {
	scrollOffset = window.pageYOffset || window.scrollTop;
  	scrollPercent = scrollOffset/scrollHeight || 0;

	/**********updates**********/
	typewriter.update();

	//ParralxAnimation update methods changes css so no draw is necessary
	parallaxMountains1.update(scrollPercent);
	parallaxMountains2.update(scrollPercent);
	parallaxMountains3.update(scrollPercent);
	parallaxLake.update(scrollPercent);
	parallaxCliff2.update(scrollPercent);
	parallaxCliff1.update(scrollPercent);
	parallaxRiver.update(scrollPercent);
	parallaxTree1.update(scrollPercent);
	parallaxTree2.update(scrollPercent);
	parallaxTree3.update(scrollPercent);
	parallaxTree4.update(scrollPercent);
	parallaxTree5.update(scrollPercent);
	parallaxTree6.update(scrollPercent);
	parallaxTree7.update(scrollPercent);
	parallaxTree8.update(scrollPercent);


	/**********draws************/
	typewriter.draw();


	window.requestAnimationFrame(draw);
}

function resize() {
	containerHeight = document.getElementById("svg-container").offsetHeight;
	viewWidth = window.innerWidth;
	viewHeight = window.innerHeight;
	scrollHeight = containerHeight-viewHeight;
}

window.addEventListener('resize', resize);

document.addEventListener('DOMContentLoaded', function() {
	resize();
	typewriter.start();
	draw();
})

