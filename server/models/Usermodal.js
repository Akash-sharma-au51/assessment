const mongoose = require('mongoose')

const userModal = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        minlength:[6, 'Password must be at least 6 characters long'],
        maxlength:[ 12, 'Password mustnot exeed 12 characters'],
        trim: true,
    },
    id: {
        type: String
    }
})

module.exports = mongoose.model('User', userModal)
