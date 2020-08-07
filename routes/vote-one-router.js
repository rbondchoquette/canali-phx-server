const express = require('express');

const VoteOneCtrl = require ('../controllers/vote-one-ctrl');

const router = express.Router();

router.put('/voteone', VoteOneCtrl.increaseVote);

router.get('/voteone', VoteOneCtrl.getVote)

module.exports = router