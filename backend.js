const fs = require('fs')

const express = require('express')
const bodyParser = require('body-parser');

var cors = require('cors');



 










const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get('/api/houses.js', async (req, res) => {
    const rows=JSON.parse(fs.readFileSync('./datasets/houses.json').toString())
    res.set({
        'Content-Type': 'text/javascript',
        //'Content-Length': '123',
        //'ETag': '12345'
    })
    res.send('export default '+JSON.stringify(rows))
})

app.post('/api/houses', async (req, res) => {
    console.log(req.body)

    const rows=JSON.parse(fs.readFileSync('./datasets/houses.json').toString())

    rows.push(req.body.house)

    fs.writeFileSync('./datasets/houses.json',JSON.stringify(rows))

    res.json(true)
})


app.listen(4567);