import createError from 'http-errors'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import path from 'path'

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (request, response) => {
  response.json({
    status: 'Online',
    message: 'API server is up and running.'
  })
})

app.use((request, response, next) => {
  next(createError(404))
})

app.use((error, request, response, next) => {
  response.locals.message = error.message
  response.locals.error = request.app.get('env') === 'development'
    ? error
    : {}

  response
    .status(error.status || 500)
    .json(error)
})

export default app