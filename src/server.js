const express = require('express')

var cors = require('express-cors')



 










const app=express()

app.use(cors({
    allowedOrigins: [
        'localhost','localhost:3000', 'worzala.pl'
    ]
}))

app.get('/api/houses', async (req, res) => {
    res.json([0,1,2,3])
})


app.listen(4567);