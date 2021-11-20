const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    avatar: {
        type: Object,
        required: false,
        contains: {
            url: {
                type: String
            },
            publicId: {
                type: String
            }
        }
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

module.exports = User = mongoose.model('Users', UserSchema);