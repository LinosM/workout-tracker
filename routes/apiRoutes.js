const db = require("../models");

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });

    app.post('/api/workouts', (req, res) => {
        db.Workout.create({})
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {   
        db.Workout.findByIdAndUpdate(  
            params.id,
            { $push:{exercises:body} },
            { new: true, runValidators:true }
        )
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .then(db => res.json(db))
        .catch(err => res.status(400).json(err))
    });
}