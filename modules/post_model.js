const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    content:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('PostModel',postSchema)