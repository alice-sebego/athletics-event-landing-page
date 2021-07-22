import { displayResponsiveNav } from "./util.js";

// elements of DOM
const $navBar = document.querySelector("#nav-bar");
const $ulNav = document.querySelector("nav > ul");
const $slidesImg = document.querySelectorAll(".content-slides > img");
const $next = document.querySelector(".right");
const $previous = document.querySelector(".left");
const $circles = document.querySelectorAll(".circles");


// Display Responsive Main Nav's item
displayResponsiveNav($navBar, $ulNav);

// Handle slider
let index = 0;

const nextSlide = () => {
    if(index < 2){

        $slidesImg[index].classList.remove("active");
        index ++;
        $slidesImg[index].classList.add("active");
    
    } else if(index === 2){

        $slidesImg[index].classList.remove("active");
        index = 0;
        $slidesImg[index].classList.add("active");

    }
}

$next.addEventListener("click", nextSlide);

const previousSlide = () => {
    if(index > 0){

        $slidesImg[index].classList.remove("active");
        index --;
        $slidesImg[index].classList.add("active");
    
    } else if(index === 0){

        $slidesImg[index].classList.remove("active");
        index = 2;
        $slidesImg[index].classList.add("active");
        
    }
}

$previous.addEventListener("click", previousSlide);