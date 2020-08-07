const Opinion = require('../models/opinion-model');

createOpinion = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Not a thorough opinion! Type some text, please.'
        })
    }

    const opinion = new Opinion(body)

    if (!opinion) {
        return res.status(400).json({ success: false, error: err })
    }

    opinion
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: opinion._id,
                message: `We'll consider it!`
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: `Oops! There was an error. We have not received your opinion.`
            })
        })
};

module.exports = { createOpinion }

