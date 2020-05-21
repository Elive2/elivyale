/*
* File: index.js
*
* Author: Eli Yale
*
* Date Modified: 05/20/2020
*
* Description: main js file that has the principal
* animation/draw loop. Sepcialized animations are 
* imported from other files. All dom collecting is done
* in this file, ie none should be called in classes.
*
* Outline: 
* 1) intantiate animator classes for each element to animate
* 2) Main draw loop is called with window.requestAnimationFrame
* 3) Draw Loop updates all animated elements
* 4) Then Draw Loop redraws all necessary elements
* 5) Some elements such as css transforms don't need redraws
*
*/

import Typewriter from './Typewriter.js'
import ParallaxAnimation from './ParallaxAnimation.js'


//parallax variables track current scroll values
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
	0.035, 0, 0.065, 0.099, 0.0, 1.22, containerHeight, viewWidth);

const mountains2El = document.getElementById("mountains2");
const parallaxMountains2 = new ParallaxAnimation("mountains2", mountains2El,
	0.035, 0, 0.070, 0.075, 0.0, 0.95, containerHeight, viewWidth);

const mountains3El = document.getElementById("mountains3");
const parallaxMountains3 = new ParallaxAnimation("mountains3", mountains3El,
	0.035, 0, 0.097, 0.075, 0.0, 1.4, containerHeight, viewWidth);

const lakeEl = document.getElementById("lake");
const parallaxLake = new ParallaxAnimation("lake", lakeEl,
	0.035, 0, 0.099, 0.075, 0.0, 1.0, containerHeight, viewWidth);

const riverEl = document.getElementById("river");
const parallaxRiver = new ParallaxAnimation("river", riverEl,
	0.05, 0, 0.188, 0.051, 0.0, 0.188, containerHeight, viewWidth);

const cliff1El = document.getElementById("cliff1");
const parallaxCliff1 = new ParallaxAnimation("cliff1", cliff1El,
	0.05, 0, 0.140, 0.12, 0.0, 0.185, containerHeight, viewWidth);

const cliff2El = document.getElementById("cliff2");
const parallaxCliff2 = new ParallaxAnimation("cliff2", cliff2El,
	0.05, 0.67, 0.140, 0.051, 0.67, 0.140, containerHeight, viewWidth);

const trees1El = document.getElementById("trees1");
const parallaxTree1 = new ParallaxAnimation("trees1", trees1El,
	0.12, -0.1, 0.15, 0.182, -0.4, 0.15, containerHeight, viewWidth);

const trees2El = document.getElementById("trees2");
const parallaxTree2 = new ParallaxAnimation("trees2", trees2El,
	0.12, -0.1, 0.16, 0.178, -0.4, 0.155, containerHeight, viewWidth);

const trees3El = document.getElementById("trees3");
const parallaxTree3 = new ParallaxAnimation("trees3", trees3El,
	0.12, -0.3, 0.165, 0.185, -0.4, 0.165, containerHeight, viewWidth);

const trees4El = document.getElementById("trees4");
const parallaxTree4 = new ParallaxAnimation("trees4", trees4El,
	0.12, 0.6, 0.155, 0.17, 0.8, 0.155, containerHeight, viewWidth);

const trees5El = document.getElementById("trees5");
const parallaxTree5 = new ParallaxAnimation("trees5", trees5El,
	0.12, 0.6, 0.165, 0.185, 0.85, 0.165, containerHeight, viewWidth);

const trees6El = document.getElementById("trees6");
const parallaxTree6 = new ParallaxAnimation("trees6", trees6El,
	0.12, 0.6, 0.169, 0.18, 0.88, 0.169, containerHeight, viewWidth);

const trees7El = document.getElementById("trees7");
const parallaxTree7 = new ParallaxAnimation("trees7", trees7El,
	0.27, 0.6, 0.289, 0.31, 0.88, 0.292, containerHeight, viewWidth);

const trees8El = document.getElementById("trees8");
const parallaxTree8 = new ParallaxAnimation("trees8", trees8El,
	0.36, 0.2, 0.369, 0.40, 0.15, 0.369, containerHeight, viewWidth);

const coral1El = document.getElementById("coral1");
const parallaxcoral1 = new ParallaxAnimation("coral1", coral1El,
	0.63, 0.60, 0.62, 0.69, 0.60, 0.25, containerHeight, viewWidth);

const shelf1El = document.getElementById("shelf1");
const parallaxShelf1 = new ParallaxAnimation("shelf1", shelf1El,
	0.63, 0.60, 0.63, 0.69, 0.60, 0.30, containerHeight, viewWidth);

const shelf2El = document.getElementById("shelf2");
const parallaxShelf2 = new ParallaxAnimation("shelf2", shelf2El,
	0.63, 0.6, 0.63, 0.69, 0.60, 0.45, containerHeight, viewWidth);

const shelf3El = document.getElementById("shelf3");
const parallaxShelf3 = new ParallaxAnimation("shelf3", shelf3El,
	0.63, 0.59, 0.65, 0.69, 0.59, 0.61, containerHeight, viewWidth);

const coral2El = document.getElementById("coral2");
const parallaxcoral2 = new ParallaxAnimation("coral2", coral2El,
	0.75, -0.03, 0.745, 0.83, -0.03, 0.15, containerHeight, viewWidth);

const shelf4El = document.getElementById("shelf4");
const parallaxShelf4 = new ParallaxAnimation("shelf4", shelf4El,
	0.75, 0, 0.755, 0.83, 0, 0.35, containerHeight, viewWidth);

const shelf5El = document.getElementById("shelf5");
const parallaxShelf5 = new ParallaxAnimation("shelf5", shelf5El,
	0.75, 0, 0.75, 0.83, 0, 0.53, containerHeight, viewWidth);

const shelf6El = document.getElementById("shelf6");
const parallaxShelf6 = new ParallaxAnimation("shelf6", shelf6El,
	0.75, 0, 0.76, 0.83, 0, 0.65, containerHeight, viewWidth);

const coral3El = document.getElementById("coral3");
const parallaxcoral3 = new ParallaxAnimation("coral", coral3El,
	0.843, 0.6, 0.845, 0.941, 0.6, 0.45, containerHeight, viewWidth);

const shelf7El = document.getElementById("shelf7");
const parallaxShelf7 = new ParallaxAnimation("shelf7", shelf7El,
	0.843, 0.6, 0.85, 0.941, 0.6, 0.45, containerHeight, viewWidth);

const shelf8El = document.getElementById("shelf8");
const parallaxShelf8 = new ParallaxAnimation("shelf8", shelf8El,
	0.843, 0.6, 0.86, 0.941, 0.6, 0.65, containerHeight, viewWidth);

const shelf9El = document.getElementById("shelf9");
const parallaxShelf9 = new ParallaxAnimation("shelf9", shelf9El,
	0.843, 0.67, 0.878, 0.941, 0.67, 0.75, containerHeight, viewWidth);





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
	parallaxcoral1.update(scrollPercent);
	parallaxShelf1.update(scrollPercent);
	parallaxShelf2.update(scrollPercent);
	parallaxShelf3.update(scrollPercent);
	parallaxcoral2.update(scrollPercent);
	parallaxShelf4.update(scrollPercent);
	parallaxShelf5.update(scrollPercent);
	parallaxShelf6.update(scrollPercent);
	parallaxcoral3.update(scrollPercent);
	parallaxShelf7.update(scrollPercent);
	parallaxShelf8.update(scrollPercent);
	parallaxShelf9.update(scrollPercent);


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

