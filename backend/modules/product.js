const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    proN : String,
    price : Number,
    quantity : Number,
    mark : String,
    description : String,
    img : String
})

const product = mongoose.model('product', productSchema)

module.exports = product