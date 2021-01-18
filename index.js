const express = require('express')
const app = express()
const {mongoose} = require('./bootstrap')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')


app.use('/',indexRouter)
app.use('/user',userRouter)



module.exports = app