import React from 'react';
import {cards, flipCard} from './../actions/memory';
import CardListItem from './CardListItem';

export default ({
    cards,
    flipCard
}) => {
    console.log(cards);
    return (
    <ul className="cards">
        {
            cards.map(card =>
                <CardListItem
                    key={card.id}
                    card={card}
                    flipCard={flipCard}
                />
            )
        }
    </ul>
)}
