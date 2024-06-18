const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    img:String,
    proN:String,
    price:Number,
    materiel:String,
    description:String,
    mark:String,
    firstName:String,
    lastName:String,
    id:String,
    somme:Number,
    number:Number
})

const cart = mongoose.model('cart', cartSchema)

module.exports = cart