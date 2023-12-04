/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(element => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = element.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", element.imageUrl);
        img.setAttribute("alt", element.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);       
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}


/* reset Function */
const reset = () => templesElement.innerHTML = "";

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.getElementById("sortBy").value;
    switch(filter) {
        case "utah":
            displayTemples(temples.filter((temple)=> temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple)=> ! temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => temple.dedicated.split(", ")[0] <= 1950));
            break;
        case "all":
            displayTemples(temples);
            break
    }
}


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });