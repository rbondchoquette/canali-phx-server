const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const opinionRouter = require('./routes/opinion-router');
const voteOneRouter = require('./routes/vote-one-router');
const voteTwoRouter = require('./routes/vote-two-router');
const voteThreeRouter = require('./routes/vote-three-router');
const voteFourRouter = require('./routes/vote-four-router');

const app = express();
const apiPort = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('CANALI-PHX-SERVER')
});

app.use('/api', opinionRouter);

app.use('/api', voteOneRouter);
app.use('/api', voteTwoRouter);
app.use('/api', voteThreeRouter);
app.use('/api', voteFourRouter);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));