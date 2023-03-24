const db = require('../../data/db-config');

module.exports = {
    addUser,
    findById,
    findByUsername,
}

function findByUsername(username) {
    return db('users').where('username', username).first();
}

function findById(id) {
    return db('users').where('user_id', id).first();
}

async function addUser(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}