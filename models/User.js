const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email:{
        type:String,
        required:true,
        unique:true    //прверка пользователя по email на уникальность
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('users',userSchema)