const mongoose = require('mongoose')

const DirectorSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minlength:2
    },
    movies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    country:{
        type:String,
        default: "World"
    },
    dateOfBirth:{
        type:String,
        minlength: 10,
        maxlength: 10
    }
})

module.exports = mongoose.model('Director',DirectorSchema)