const express = require('express');

const VoteFourCtrl = require ('../controllers/vote-four-ctrl');

const router = express.Router();

router.put('/votefour', VoteFourCtrl.increaseVote);

router.get('/votefour', VoteFourCtrl.getVote);

module.exports = router