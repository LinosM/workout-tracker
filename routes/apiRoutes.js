const Workout = require("../models/workout.js");
const express = require("express");
const router = express.Router();

router.post('/api/workouts', (req, res) => {
    Workout.find({})
    .then(db => {
        res.json(db);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;