const express = require('express')
const app = express()
const Section = require("../models/section.model")
const router = express.Router();

const { getSection, getSections, createIpc } = require("../controllers/section.controller")


router.get('/ipc', getSections);

router.get('/ipc/:section', getSection);

router.post('/ipc/entry', createIpc)

module.exports = router;  
