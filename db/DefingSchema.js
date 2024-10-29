const Mongoose = require('mongoose')


const UsersSchema = new Mongoose.Schema({
    Fname: {
        type: String,
    },
    Lname: {
        type: String,
    },
    Email: {
        type: String,
        unique: true
    },
    Age: {
        type: Number,
    }
})

const UserModel = new Mongoose.model('classfourth', UsersSchema)

module.exports = UserModel
