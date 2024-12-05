const express = require('express')
const router = express.Router()
const idToInt = require('../middlewares/idToInt')
const characterExist = require('../middlewares/characterExist')

const characterController = require('../controllers/characterController')

router.get('/', characterController.index)

router.get('/:id', idToInt, characterExist, characterController.show)

router.delete('/:id', idToInt, characterExist, characterController.destroy)

module.exports = router