const router = require('express').Router();
const Cars = require('./cars-model');
const { restricted } = require('../users/usersMiddleware');

router.get('/', restricted, async (req, res, next) => {
    try{
        const carsList = await Cars.findAll();
        res.status(200).json(carsList);
    } catch (err) {
        next(err);
    }
});

router.get('/make', restricted, async (req, res, next) => {
    try{
        const carsList = await Cars.findByMake(req.body.make);
        res.status(200).json(carsList);
    } catch (err) {
        next(err);
    }
});

router.post('/', restricted, async (req, res, next) => {
    try {
        const newCar = await Cars.insertCar(req.body);
        res.status(201).json(newCar);
    } catch(err) {
        next(err);
    }
})

router.put('/:id', restricted, async (req, res, next) => {
    try {
        const updatedCar = await Cars.updateCar(req.params.id, req.body);
        res.status(200).json(updatedCar);
    } catch(err) {
        next(err);
    }
})

router.delete('/:id', restricted, async (req, res, next) => {
    try {
        const deletedCar = await Cars.deleteCar(req.params.id);
        res.status(200).json(deletedCar);
    } catch(err) {
        next(err);
    }
})

module.exports = router;