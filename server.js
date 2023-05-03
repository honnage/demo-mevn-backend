// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')

import express  from 'express'
import morgan  from 'morgan'
import cors  from 'cors'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello World!'))
app.set('port', process.env.PORT || port )

app.listen(app.get('port'), () => {
    console.log(`Server runnning on port ${port}`)
})