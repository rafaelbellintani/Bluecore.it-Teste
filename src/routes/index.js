const express = require('express')
const router = express.Router()

router.use('/api/posts', require('./post'))
//TODO: Indicar aqui a rota para comments

router.use('/', require('./root'))

module.exports = router
