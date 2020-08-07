const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vote = new Schema (
    {
        count: { type: Number, required: true },
    }
)

module.exports = mongoose.model('votes', Vote)