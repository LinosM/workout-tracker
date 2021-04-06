const Workout = require("../models/workout.js");

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        Workout.find({})
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });

    app.post('/api/workouts', (req, res) => {
        Workout.create({})
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {   
        Workout.findByIdAndUpdate(  
            params.id,
            { $push:{exercises:body} },
            { new: true, runValidators:true }
        )
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });

    app.get('/api/workouts/range', (req, res) => {
        Workout.find({})
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });
}