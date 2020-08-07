const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Opinion = new Schema (
    {
        substance: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('opinions', Opinion)