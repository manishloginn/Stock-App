const Stock = require("../models/stockModel");

const averageClose = async (req, res) => {
    const { start_date, end_date, symbol } = req.query;

    const result = await Stock.aggregate([
        { $match: { date: { $gte: start_date, $lte: end_date }, symbol } },
        { $group: { _id: null, average_close: { $avg: "$close" } } }
    ]);

    res.json({ average_close: result[0]?.average_close || 0 });
}

module.exports = averageClose