import { displayResponsiveNav } from "./util.js";

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
let index = 0;

// Handle slide with mouse's click
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

// Handle slide with keyboard
const keypressed = event => {

    switch (event.key) {
        case "ArrowLeft":
            previousSlide();
            break;
        case "ArrowRight":
            nextSlide();
            break;
    }

}

document.addEventListener("keydown", keypressed);

// Handle circles btn of slider
$circles.forEach(circle => {

    circle.addEventListener("click", function(){
        for(let i = 0; i < $circles.length; i++){
          $circles[i].classList.remove("active-circle");  
        }
        this.classList.add("active-circle");
        $slidesImg[index].classList.remove("active");
        index = this.getAttribute("data-clic") - 1;
        $slidesImg[index].classList.add("active");
    });
    
})