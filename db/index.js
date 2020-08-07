const mongoose = require('mongoose');

db_url = 'mongodb+srv://canal-phx-user:g0QkcFWumShNE5JC@canali-phx-app.g0fnp.azure.mongodb.net/canali-phx-db?retryWrites=true&w=majority';

mongoose
    .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('connection error', e.message)
    })

const db = mongoose.connection

module.exports = db