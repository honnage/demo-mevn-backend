const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.set('port', process.env.PORT || port )

app.listen(app.get('prot'), () => {
    console.log(`Server runnning on port ${port}`)
})