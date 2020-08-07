const express = require('express');

const VoteTwoCtrl = require ('../controllers/vote-two-ctrl');

const router = express.Router();

router.put('/votetwo', VoteTwoCtrl.increaseVote)

router.get('/votetwo', VoteTwoCtrl.getVote)

module.exports = router