const express = require('express');

const VoteThreeCtrl = require ('../controllers/vote-three-ctrl');

const router = express.Router();

router.put('/votethree', VoteThreeCtrl.increaseVote);

router.get('/votethree', VoteThreeCtrl.getVote);

module.exports = router