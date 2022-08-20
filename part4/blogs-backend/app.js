const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const blogsRouter = require('./controllers/blogs')

logger.info(`connecting to ${config.MONGODB_URI}`)
mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        console.log('mongoose connected successfully')
    })
    .catch(() => {
        console.log('failed to connect to mongoose')
    })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app