import { displayResponsiveNav } from "./util.js";

const $navBar = document.querySelector("#nav-bar");
const $ulNav = document.querySelector("nav > ul");

// Display Responsive Main Nav's item
displayResponsiveNav($navBar, $ulNav);