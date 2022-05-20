const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        require: true
    },
    passWord: {
        type: String,
        unique: true,
        require: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('UserModel', userSchema);