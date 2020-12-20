// Изменить массив с помощью функции:
const cards = ['card-1', 'card-2', 'card-3', 'card-4']
const removeCard = function(allCards, cardToRemove) {
    const index = allCards.indexOf(cardToRemove);
    allCards.splice(index, 1);
};
removeCard(cards, 'card-2');
console.log(cards);
removeCard(cards, 'card-4')
console.log(cards);


const addCard = function(allCards, cardToInsert, index) {
    allCards.splice(index, 0, cardToInsert);
}