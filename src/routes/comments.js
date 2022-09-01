const express = require('express')
const router = express.Router()

const CommentController = require('../controllers/commentController')

router.get('/', CommentController.list)
router.get('/:postid', CommentController.listByPostId)
router.post('/', CommentController.insertComment)

module.exports = router
