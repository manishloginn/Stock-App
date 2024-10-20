const Stock = require("../models/stockModel");

const highestVolume = async (req, res) => {

    const { start_date, end_date, symbol } = req.query;

    const filter = { 
        date: { $gte: start_date, $lte: end_date },
        ...(symbol && { symbol })
    };

    console.log(filter)
    const result = await Stock.find(filter).sort({ volume: -1 }).limit(1);
    res.json(result[0]);
}

module.exports = {highestVolume}