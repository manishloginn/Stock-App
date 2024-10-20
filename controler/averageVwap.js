const Stock = require("../models/stockModel");

const averageVwap = async (req, res) => {
    const { start_date, end_date, symbol } = req.query;

    const result = await Stock.aggregate([
        { $match: { date: { $gte: start_date, $lte: end_date }, ...(symbol && { symbol }) } },
        { $group: { _id: null, average_vwap: { $avg: "$vwap" } } }
    ]);

    res.json({ average_vwap: result[0]?.average_vwap || 0 });
}

module.exports = averageVwap