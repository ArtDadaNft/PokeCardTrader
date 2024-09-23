const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: String,
    creditCard: String,
});

module.exports = mongoose.model('User', userSchema);
