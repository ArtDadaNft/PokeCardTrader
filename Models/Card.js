const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    set: { type: String, required: true },
    name: { type: String, required: true },
    condition: { type: String, required: true },
    price: { type: Number, required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '90d' } // Scadenza 3 mesi
});

module.exports = mongoose.model('Card', cardSchema);
