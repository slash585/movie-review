const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name:String,
    imagePath:String,
    imdb:{
        type:Number,
        max:10,
        min:0
    },
    category:{
        type:String,
        maxlength:30,
        minlength:2
    },
    year:{
        type:Number,
        max:2040,
        min:1900
    },
    date:{
        type:Date,
        default:Date.now()
    },
    casts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cast',
        autopopulate: {maxDepth: 1}
    }],
    director:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        autopopulate: {maxDepth: 1}
    }]
})

MovieSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Movie',MovieSchema)