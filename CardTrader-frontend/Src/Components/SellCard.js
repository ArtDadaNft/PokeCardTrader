import React, { useState } from 'react';
import axios from 'axios';

const SellCard = () => {
    const [formData, setFormData] = useState({ set: '', name: '', condition: '', price: '', imageUrl: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/cards', formData);
        // Gestisci la risposta
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="set" onChange={handleChange} placeholder="Set" />
            <input type="text" name="name" onChange={handleChange} placeholder="Card Name" />
            <input type="text" name="condition" onChange={handleChange} placeholder="Condition" />
            <input type="number" name="price" onChange={handleChange} placeholder="Price" />
            <input type="text" name="imageUrl" onChange={handleChange} placeholder="Image URL" />
            <button type="submit">Sell Card</button>
        </form>
    );
};

export default SellCard;
