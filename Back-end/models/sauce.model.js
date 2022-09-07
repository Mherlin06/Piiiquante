const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
        maxLength: 250
    },
    manufacturer: { 
        type: String, 
        required: true,
        trim: true,
        maxLength: 250,
    },
    descritption: { 
        type: String, 
        required: true,
        maxLength: 500,
        trim: true
    },
    mainPepper: { 
        type: String, 
        required: true,
        trim: true,
    },
    imageUrl: { 
        type: String, 
        default: "../images/sauce.png"
    },
    heat: { 
        type: Number, 
        required: true 
    },
    likes: Number,
    dislikes: Number,
    usersLiked: [String],
    usersDisliked: [String]
});

module.exports = mongoose.model('Sauce', sauceSchema);
