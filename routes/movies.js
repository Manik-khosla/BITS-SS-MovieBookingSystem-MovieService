const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

// List movies by theatre
router.get('/get', async (req, res) => {
    try {
        const movies = await Movie.find({theatreId: req.query.theatreId});
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/add', async (req, res) => {
    try {
        const movies = await new Movie(req.body).save();
        console.log("New Movie has been added successfully " + movies);
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
