// const User = require('./users-model');
const { JWT_SECRET } = require('../secrets');
const jwt = require('jsonwebtoken');

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                next({ status: 401, message: `token invalid` })
            } else {
                req.decodedJwt = decoded
                next()
            }
        })
    } else {
        next({ status: 401, message: `token required` })
    }
}

const checkUsernameExists = async (req, res, next) => {
    try {
        console.log('working on checkUsernameExists mw');
        next()
    } catch(err) {
        next(err);
    }
}

const validateCredentials = (req, res, next) => {
    req.username = req.body.username.trim()
    req.password = req.body.password.trim()
    next()
}

module.exports = {
    restricted,
    checkUsernameExists,
    validateCredentials,
}