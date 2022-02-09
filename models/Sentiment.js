const mongoose = require('mongoose');

const SentimentSchema = new mongoose.Schema({
    pair: {
        type: String
    },
    long: {
        type: String
    },
    date: {
        type: String
    }
})

module.exports = mongoose.model('Sentiment', SentimentSchema)