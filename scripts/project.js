
/* Declare and initialize global variables */
const cardsElement = document.querySelector("#cards");
let cards = [];

/* async displayCards Function */
const displayCards = (cards) => {
    cards.forEach(card => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = `${card.cardName}`;
        let img = document.createElement("img");
        img.setAttribute("src", card.imageUrl);
        img.setAttribute("alt", card.cardName);
        article.appendChild(h3);
        article.appendChild(img);
        cardsElement.appendChild(article);       
    });
}

/* async getCards Function using fetch()*/
const getCards = async () => {
    const response = await fetch("https://run.mocky.io/v3/bdc4b850-7a80-44c8-afc1-989eb0917b54");
    cards = await response.json();
    displayCards(cards);
}


/* reset Function */
const reset = () => cardsElement.innerHTML = "";

/* sortBy Function */
const sortBy = (cards) => {
    reset();
    let filter = document.getElementById("sortBy").value;
    switch(filter) {
        case "monster":
            displayCards(cards.filter((card)=> card.type.includes("monster")));
            break;
        case "exceed monster":
            displayCards(cards.filter((card)=> card.type.includes("exceed monster")));
            break;
        case "fusion monster":
            displayCards(cards.filter((card)=> card.type.includes("fusion monster")));
            break;
        case "spell":
            displayCards(cards.filter((card)=> card.type.includes("spell")));
            break;
        case "trap":
            displayCards(cards.filter((card)=> card.type.includes("trap")));
            break;
        case "all":
            displayCards(cards);

    }
}


getCards();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(cards) });