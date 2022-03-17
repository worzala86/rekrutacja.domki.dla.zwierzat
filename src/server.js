const express = require('express')

var cors = require('express-cors')



 










const app=express()

app.use(cors({
    allowedOrigins: [
        'localhost','localhost:3000', 'worzala.pl'
    ]
}))

app.get('/api/houses.js', async (req, res) => {
    const data=[0,1,2,3]
    res.set({
        'Content-Type': 'text/javascript',
        //'Content-Length': '123',
        //'ETag': '12345'
    })
    res.send('export default '+JSON.stringify(data))
})


app.listen(4567);