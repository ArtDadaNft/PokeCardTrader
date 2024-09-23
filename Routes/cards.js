const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

// Creare una nuova inserzione
router.post('/', async (req, res) => {
    const { set, name, condition, price, seller, imageUrl } = req.body;
    const newCard = new Card({ set, name, condition, price, seller, imageUrl });
    await newCard.save();
    res.status(201).json(newCard);
});

// Ottenere tutte le carte di un set
router.get('/:set', async (req, res) => {
    const cards = await Card.find({ set: req.params.set });
    res.json(cards);
});

// Ottenere dettagli di una carta
router.get('/:set/:name', async (req, res) => {
    const card = await Card.findOne({ set: req.params.set, name: req.params.name });
    res.json(card);
});

module.exports = router;
