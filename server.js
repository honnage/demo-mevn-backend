// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')

import express  from 'express'
import morgan  from 'morgan'
import cors  from 'cors'
import path from 'path'

require('dotenv').config()

const app = express()
const port = 3066

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Hello World!'))
app.set('port', process.env.PORT || port )

app.listen(app.get('port'), () => {
    console.log(`Server runnning on port ${app.get('port')}`)
})