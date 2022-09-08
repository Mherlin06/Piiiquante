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
    description: { 
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
        required: true
    },
    heat: { 
        type: Number, 
        required: true 
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    usersLiked: [String],
    usersDisliked: [String]
});

module.exports = mongoose.model('Sauce', sauceSchema);
