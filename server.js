const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.post('/login', function(req, res){
    console.log(req.body.name)
    res.send('valid')
})

app.listen(3000, () => console.log('running...'))//server listen hulam mecherecha lay new yemithafew
