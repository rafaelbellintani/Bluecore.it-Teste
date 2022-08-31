const express = require('express')
const router = express.Router()

const PostController = require('../controllers/postController')

router.get('/', PostController.list)
router.get('/:id', PostController.listById)

module.exports = router
