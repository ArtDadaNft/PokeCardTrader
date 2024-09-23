import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = ({ set }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const response = await axios.get(`http://localhost:5000/api/cards/${set}`);
            setCards(response.data);
        };
        fetchCards();
    }, [set]);

    return (
        <div>
            {cards.map(card => (
                <div key={card._id}>
                    <h3>{card.name}</h3>
                    <p>Condition: {card.condition}</p>
                    <p>Price: ${card.price}</p>
                    <img src={card.imageUrl} alt={card.name} />
                </div>
            ))}
        </div>
    );
};

export default CardList;
