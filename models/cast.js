const mongoose = require('mongoose')

const CastSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minlength:2
    },
    movies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        autopopulate: {maxDepth: 1}
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

MovieSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Cast',CastSchema)