require("dotenv").config();

const jwt = require("jsonwebtoken");

const tokenKey = process.env.TOKEN_KEY
module.exports.createSecretToken = (id) => {
    return jwt.sign({id}, tokenKey,{
        expiresIn: 3 * 24 * 60 * 60,
    });
}