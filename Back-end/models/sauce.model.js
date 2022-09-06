const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    descritption: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: Number,
    dislikes: Number,
    usersLiked: [String],
    usersDisliked: [String]
});

module.exports = mongoose.model('Sauce', sauceSchema);