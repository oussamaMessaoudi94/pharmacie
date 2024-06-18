const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const signupSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{type:String, unique:true},
    tel : String,
    password: String,
    confPwd: String
})

signupSchema.plugin(uniqueValidator);

const user = mongoose.model('user', signupSchema)

module.exports = user