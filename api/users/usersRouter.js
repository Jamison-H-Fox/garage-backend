const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { checkUsernameExists, validateCredentials } = require('../users/usersMiddleware');
const { BCRYPT_ROUNDS, JWT_SECRET } = require('../secrets');

const router = require('express').Router();

const User = require('./users-model');

router.post('/register', checkUsernameExists, async (req, res, next) => {
    try {
        let user = req.body;

        const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
        user.password = hash;

        const newUser = await User.addUser(user)
        console.log(newUser);
        res.status(201).json(newUser);
    } catch(err) {
        next(err)
    }
})

router.post('/login', validateCredentials, async (req, res, next) => {
    try {
        const user = await User.findByUsername(req.username);
        if (user && bcrypt.compareSync(req.password, user.password)) {
            const token = buildToken(user);
            res.status(200).json({ message: `welcome, ${user.username}`, token })
        } else if (!user || !bcrypt.compareSync(req.password, user.password)) {
            res.status(400).json({ message: 'invalid credentials' })
        }
    } catch(err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try{
        res.json({ message: `working on the get /users endpoint` })
    } catch (err) {
        next(err);
    }
})

function buildToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router;