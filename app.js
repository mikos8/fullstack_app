const express = require('express');
const app = express();
const authRoutes = require('./routes/auth')
const analiticsRoutes = require('./routes/analitics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const bodyParser = require('body-parser')
const cors = require('cors'); // мог обрабатывать корс 
const morgan = require('morgan') // красиво логировать процесыы
const mongoose = require('mongoose')


mongoose.connect('srv://cluster0.t1ug3.mongodb.net/fullstack')
    .then(() => {
        console.log('MongoDB conected');
    })
    .catch(error=>console.log(error))
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/analitics', analiticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


module.exports = app;