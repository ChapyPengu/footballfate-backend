const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const authRoutes = require('./routes/auth.routes')
const playerRoutes = require('./routes/player.routes')
const userRoutes = require('./routes/user.routes')
const weekRoutes = require('./routes/week.routes')

const app = express()

const PORT = process.env.PORT ?? 3000
const CLIENT = process.env.CLIENT

app.set('PORT', PORT)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors({
  origin: CLIENT,
  credentials: true
}))

app.use('/auth', authRoutes)
app.use('/player', playerRoutes)
app.use('/user', userRoutes)
app.use('/week', weekRoutes)

app.use(express.static(path.join(__dirname, '../../public')))

module.exports = app