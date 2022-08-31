const express = require('express')
const router = express.Router()

const apiUrl = process.env.API_URL || 'http://localhost:3000/api/'
const rootUrl = process.env.ROOT_URL || 'http://localhost:3000/'

router.get('/', (request, response) => {
  response.render('posts.ejs', {
    apiUrl,
    rootUrl,
    title: 'Página de posts',
    layout: './layouts/default'
  })
})

router.get('/:id/post', (request, response) => {
  response.render('comments.ejs', {
    apiUrl,
    rootUrl,
    postId: request.params.id,
    title: 'Página Comentários',
    layout: './layouts/default'
  })
})

module.exports = router
