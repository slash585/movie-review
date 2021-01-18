const mongoose = require('mongoose')
const User = require('./user')

const CommentSchema = new mongoose.Schema({
    author:{User},
    comment:{
        type: String,
        minlength: 1,
        maxlength: 140
    }
})

module.exports = mongoose.model('Comment',CommentSchema)