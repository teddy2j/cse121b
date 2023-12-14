
let cards = [];

/* async displayCards Function */
const displayCards = (cards) => {
    cards.forEach(card => {
      console.log(card)   
    });
}

/* async getCards Function using fetch()*/
const getCards = async () => {
    const response = await fetch("https://run.mocky.io/v3/bdc4b850-7a80-44c8-afc1-989eb0917b54");
    cardsList = await response.json();
}




getCards();

displayCards(cards);