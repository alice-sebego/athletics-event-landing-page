/**
 * Display Responsive Main Nav's item
 * @function displayResponsiveNav
 * @param {HTMLLabelElement} navBar 
 * @param {HTMLUListElement} nav 
 */
export const displayResponsiveNav = (navBar, nav) =>{
    navBar.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

/**
 * Change icon of responsive nav on user's click
 * @function changeIconNav
 * @param {HTMLLabelElement} navBar 
 * @param {HTMLUListElement} ulNav 
 */
export const changeIconNav = (navBar, ulNav) =>{
    navBar.addEventListener("click", () =>{
        if(ulNav.classList.contains("show")){
            navBar.innerHTML = "";
            navBar.innerHTML += "<i class='fas fa-times'></i>";
        } else {
            navBar.innerHTML = "";
            navBar.innerHTML += "<i class='fas fa-bars'></i>";
        }
    });
}

/**
 * Handle user's click on a main nav's link
 * @function handleClickLinkNav
 * @param {HTMLLIElement} liNav 
 * @param {HTMLUListElement} ulNav 
 */
export const handleClickLinkNav = (liNav, ulNav) => {
    for(let li of liNav){
        li.addEventListener("click", () => {
            if(ulNav.classList.contains("show")){
                ulNav.classList.toggle("show");
            }
        });
    }
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

/**
 * Set current date
 * @function setCurrentDate
 * @returns {string} currentDate
 */
export const setCurrentDate = () => {
    
    const date = new Date(Date.now());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let currentDate = date.toLocaleDateString("fr-FR", options);

    return currentDate;

}