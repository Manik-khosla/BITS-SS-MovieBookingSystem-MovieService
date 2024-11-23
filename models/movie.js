const { Timestamp } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    duration: {type: String, required: true},
    summary: {type: String, required:true},
    theatreId : {type: mongoose.Schema.Types.ObjectId, required:true},
    image: {type: String, required:false}
});

module.exports = mongoose.model('Movie', movieSchema);
