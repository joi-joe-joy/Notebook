const mongoose = require('mongoose');
const noteShema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Note = mongoose.model('Note', noteShema);

module.exports = Note;