// const User = require('./users-model');

const restricted = async (req, res, next) => {
    try {
        console.log('working on restricted mw')
        next()
    } catch(err) {
        next(err)
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