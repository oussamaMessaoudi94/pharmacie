const mongoose = require('mongoose')

const invoiceschema = mongoose.Schema({
    country: String,
    fName: String,
    lName: String,
    adresse: String,
    state: String,
    zip: String,
    email: String,
    phone: String,
    note: String,
    carts: []
})

const invoice = mongoose.model('invoice', invoiceschema)

module.exports = invoice