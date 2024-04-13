const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    },
    Offense: {
        type: String,
        required: true
    },
    Punishment: {
        type: String,
        required: true
    },
    Section: {
        type: Number,
        required: true
    }
});

const Section = mongoose.model('Section', sectionSchema, 'sections');

module.exports = Section;
