
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    code: {
        type: Number,
        required: true,
        min: 1,
        max: 255
    },
    name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    amount: {
        type: Number,
        required: true,
        min: 1
    },
    purchasePrice: {
        type: Number,
        required: true,
        min: 1
    },
    salePrice: {
        type: Number,
        required: true,
        min: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);