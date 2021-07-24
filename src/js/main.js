import { displayResponsiveNav } from "./util.js";
import Slider from "./slider.js";

// elements of DOM
const $navBar = document.querySelector("#nav-bar");
const $ulNav = document.querySelector("nav > ul");
const $slidesImg = document.querySelectorAll(".content-slides > img");
const $next = document.querySelector(".right");
const $previous = document.querySelector(".left");
const $circles = document.querySelectorAll(".circle");


// Display Responsive Main Nav's item
displayResponsiveNav($navBar, $ulNav);

// --- Handle slider --- //
const slider = new Slider($slidesImg, $next, $previous, $circles, 2);

slider.next.addEventListener("click", slider.nextSlide);

slider.previous.addEventListener("click", slider.previousSlide);

document.addEventListener("keydown", slider.keypressed);

slider.handleCircles();