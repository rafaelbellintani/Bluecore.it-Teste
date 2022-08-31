const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const logger = require('./util/logger')
const morgan = require('./middlewares/morgan')

const app = express()

app.set('layout', './layouts/default')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan)
app.use(cors())

app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(require('./routes'))

app.use(function (error, _, response, next) {
  response.locals.message = error.message

  response.locals.error = error

  logger.error(JSON.stringify(error))

  return response.status(error.status || 500).send({
    message: error.message,
    stack: error.stack
  })
})

module.exports = app
