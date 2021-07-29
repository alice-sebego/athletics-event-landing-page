import { displayResponsiveNav, customizePlanning } from "./util.js";
import Slider from "./slider.js";
import { sponsorLogos } from "./asset.js";

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
    (
        $infoProgramme.showModal(),
        $infoProgramme.scrollTop = 0 
    ):(
    console.error("L'API <dialog> n'est pas prise en charge par ce navigateur."));
});

$close.addEventListener('click', () => $infoProgramme.close());

// Manage display of date for planning's table
const $tdDatePlanning = document.querySelectorAll("#info-planning table td");

customizePlanning($tdDatePlanning, "Date", "14/09/2021", "Discipline");

// Add dynamically sponsor's logo on the DOM
const $containSponsor = document.querySelector("#contain-sponsor");

for (const [, logo] of Object.entries(sponsorLogos)) {
    
    let [url, alt] = Object.values(logo);
    
    const sponsor = document.createElement("div");
    sponsor.setAttribute("class", "sponsor");
    const img = document.createElement("img");
    img.src = url;
    img.setAttribute("alt", alt);
    sponsor.appendChild(img);
    $containSponsor.appendChild(sponsor);

}

// Add current weather with Metaweather API
const $meteo = document.querySelector("#weather");
const urlAPI = "https://landingpageathle.herokuapp.com/https://www.metaweather.com/api/location/580778";

fetch(urlAPI)
.then(response => {
    if(response.ok){ 
        return response.json();
    } else {
        return Promise.reject("une erreur inattendue s'est produite"); 
    }  
})
.then(result =>{
    const unknown = "NC";
    const today = result.consolidated_weather[0];
    $meteo.innerHTML += `
    <img src="https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg" alt="${today.weather_state_name}" />
    <p>Min : ${today.min_temp.toFixed(1) ? today.min_temp.toFixed(1) : unknown} °C - Max : ${today.max_temp.toFixed(1) ? today.max_temp.toFixed(1) : unknown} °C</p>
    <hr>
    <p class="bold temp">Il fait ${today.the_temp.toFixed(1) ? today.the_temp.toFixed(1) : unknown} °C</p>
    <p>Vitesse du vent : ${today.wind_speed.toFixed(2) ? today.wind_speed.toFixed(2) : unknown} mph</p>
    `;
   
})
.catch(error => {
    if(error === 404){
        $meteo.innerHTML += `
        <p class="bold">Erreur 404 <br>
        Nous sommes désolés</p>
        `
    } else {
        console.log('error is', error);
        $meteo.innerHTML += `
        <p>Les données météo sont actuellement indisponibles<br>
        Veuillez rééssayer ou patienter, merci de votre compréhension</p>
        `
    }
});