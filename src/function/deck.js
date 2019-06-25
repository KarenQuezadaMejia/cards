import shuffle from 'shuffle-array';
import img from './imgCards';

function deck () {
    const CardsNumbers = 8;
    const showCards = img;
    let allCards = [];
    //empieza a buscar el numero de cardas
    while (cards.length < CardsNumbers){
        //indice aleatorio, donde se multiplica para el número aleatorio
        const getRandomInt = Math.floor(Math.random()* allCards.length);     
        //el objeto 
        const cards = {
            image: showCards.splice(getRandomInt,1)[0],
            accerts: false
        };

        allcards.push(cards);//posicion 0
        allcards.push({...cards}); //posicion 1 de array
    }
    return shuffle(allcards);
};
export default deck;