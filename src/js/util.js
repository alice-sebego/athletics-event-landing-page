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

/**
 * Manage appereance of elements collection on a table
 * @function customizePlanning
 * @param {HTMLAllCollection} elementCollection 
 * @param {string} date 
 * @param {string} content 
 * @param {string} title 
 */
export const customizePlanning = (elementCollection, date, content, title) => {
    
    elementCollection.forEach( td => {
        if(td.getAttribute("data-label") === date){
            
            td.style.color = "white";
            
            td.textContent === content ?
            td.style.backgroundColor = "#bb0c0c":
            td.style.backgroundColor = "#0c4ca0";
    
        }
    
        if(td.getAttribute("data-label") === title){
            td.style.fontWeight = "bold";
        }
    });

}