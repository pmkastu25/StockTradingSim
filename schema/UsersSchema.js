const {Schema} = require('mongoose');

const UsersSchema = new Schema({
    email: String,
    username: String,
    password: String,
});

module.exports = {UsersSchema};