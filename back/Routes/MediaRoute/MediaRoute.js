const express = require('express')
const controlReaction = require('../../Controllers/MediaController/controlReaction')
const controlRelevanceVideo = require('../../Controllers/MediaController/controlRelevanceVideo')
const controlUpload = require('../../Controllers/MediaController/controlUpload')
const controlVideoStream = require('../../Controllers/MediaController/controlVideoStream')
const router = express.Router()

router.post('/upload',  controlUpload)
router.get('/video-stream', controlVideoStream)
router.get('/relevance', controlRelevanceVideo)

router.post('/reaction', controlReaction)

module.exports = router