const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId:{
        type:String,
        unique: true
    },
    name:String,
    surname:String,
    profilePhoto:String,
    movies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        autopopulate: {maxDepth: 1}
    }]
})

UserSchema.plugin(require('mongoose-autopopulate'))
UserSchema.plugin(require('mongoose-findorcreate'))
module.exports = mongoose.model('User',UserSchema)