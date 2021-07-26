import { displayResponsiveNav, customizePlanning } from "./util.js";
import Slider from "./slider.js";

// Display Responsive Main Nav's item
const $navBar = document.querySelector("#nav-bar");
const $ulNav = document.querySelector("nav > ul");

displayResponsiveNav($navBar, $ulNav);

// --- Handle slider --- //
const $slidesImg = document.querySelectorAll(".content-slides > img");
const $next = document.querySelector(".right");
const $previous = document.querySelector(".left");
const $circles = document.querySelectorAll(".circle");

const slider = new Slider($slidesImg, $next, $previous, $circles, 2);

slider.next.addEventListener("click", slider.nextSlide);

slider.previous.addEventListener("click", slider.previousSlide);

document.addEventListener("keydown", slider.keypressed);

slider.handleCircles();

// Manage dialog elements for planning of meeting
const $progBtn = document.querySelector("#planning > button") 
const $infoProgramme = document.querySelector("#info-planning");
const $close = document.querySelector("#close");

$progBtn.addEventListener('click', () => {
    typeof $infoProgramme.showModal === "function" ?
    $infoProgramme.showModal() :
    console.error("L'API <dialog> n'est pas prise en charge par ce navigateur.");
});

$close.addEventListener('click', () => $infoProgramme.close());

// Manage display of date for planning's table
const $tdDatePlanning = document.querySelectorAll("#info-planning table td");

customizePlanning($tdDatePlanning, "Date", "14/09/2021", "Discipline");

// Add dynamically sponsor's logo on the DOM
const $containSponsor = document.querySelector("#contain-sponsor");