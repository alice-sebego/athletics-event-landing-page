/**
 * Display Responsive Main Nav's item
 * @function displayResponsiveNav
 * @param {HTMLElement} icon 
 * @param {HTMLUListElement} nav 
 */
export const displayResponsiveNav = (icon, nav) =>{
    icon.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}