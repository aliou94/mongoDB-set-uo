const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
});







const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    review: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;