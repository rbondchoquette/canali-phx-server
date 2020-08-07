const express = require('express');

const OpinionCtrl = require ('../controllers/opinion-ctrl');

const router = express.Router();

router.post('/opinion', OpinionCtrl.createOpinion);

module.exports = router