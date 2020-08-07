const Vote = require('../models/vote-model');

const id = "5f25cccd5c95c7a1b813a9d1"

increaseVote = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: `Didn't get your vote, sorry`,
        })
    }

    Vote.findOne({ "_id": id}, (err, vote) => {
        if (err) {
            return res.status(404).json({
                err,
                message: `Can't find the the issue you are voting on`,
            })
        }
    
        vote.count = body.count

        vote
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: vote._id,
                    message: 'Vote Counted!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Due to error, your vote was not counted',
                })
            })
    })
};

getVote = async (req, res) => {
    await Vote.findOne({ "_id": id }, (err, vote) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: vote })
    }).catch(err => console.log(err))
};

module.exports = { increaseVote, getVote }

