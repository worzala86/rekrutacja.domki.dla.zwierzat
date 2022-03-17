const fs = require('fs')

const express = require('express')
const bodyParser = require('body-parser');

var cors = require('cors');



 










const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get('/api/houses.js', async (req, res) => {
    const data=[0,1,2,3]
    res.set({
        'Content-Type': 'text/javascript',
        //'Content-Length': '123',
        //'ETag': '12345'
    })
    res.send('export default '+JSON.stringify(data))
})

app.post('/api/houses', async (req, res) => {
    console.log(req.body)

    const rows=[
        req.body,
    ]

    fs.writeFileSync('./datasets/houses.json',JSON.stringify(rows))

    res.json(true)
})


app.listen(4567);