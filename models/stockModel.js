const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    date: {
        type: String,
        set: (val) => new Date(val).toISOString().split('T')[0]
    },
    symbol: { type: String, required: true },
    series: { type: String, required: true },
    prev_close: { type: Number, required: true },
    open: Number,
    high: Number,
    low: Number,
    last: Number,
    close: Number,
    vwap: Number,
    volume: Number,
    turnover: Number,
    trades: Number,
    deliverable: Number,
    percent_deliverable: Number,
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;