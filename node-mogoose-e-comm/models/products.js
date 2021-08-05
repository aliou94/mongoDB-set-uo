const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    review: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;