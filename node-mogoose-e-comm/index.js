const mongoose = require('mongoose');
const Products = require('./models/products');

const url = 'mongodb://localhost:27017/products';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {

    console.log('Connected correctly to server');

    Products.create({
        name: 'Iphone 12 pro max',
        review: 'Best phone on earth'
    })
    .then(product => {
        console.log(product);
        return Products.find();
    })
    .then(product  => {
        console.log(product);
        return Products.deleteMany();
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});