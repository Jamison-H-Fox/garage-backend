const db = require('../../data/db-config');

console.log(db('cars'));

module.exports = {
    findById,
    findAll,
    findByMake,
    updateCar,
    insertCar,
    deleteCar,
}

function findById(id) {
    return db('cars').where('car_id', id).first()
}

function findAll() {
    return db('cars')
}

function findByMake(carMake) {
    return db('cars').where('make', carMake)
}

async function insertCar(car) {
    const newCarId = await db('cars').insert(car)
    return findById(newCarId);
}

async function updateCar(id, updates) {
    await db('cars').where('car_id', id).update(updates)
    return findById(id)
}

async function deleteCar(id) {
    const deletedCar = await findById(id)
    await db('cars').where('car_id', id).del()
    return deletedCar;
}