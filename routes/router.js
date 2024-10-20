const express = require('express')
const router = express.Router()
const { uploadsCall } = require('../controler/uploadsCall')
const { highestVolume } = require('../controler/highestVplume')
const averageClose = require('../controler/averageClose')
const averageVwap = require('../controler/averageVwap')




router.post('/', uploadsCall)
router.get('/highest_volume', highestVolume)
router.get('/average_close', averageClose)
router.get('/average_vwap', averageVwap)



module.exports = router