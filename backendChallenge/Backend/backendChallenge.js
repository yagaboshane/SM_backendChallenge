const express = reqire ('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const data = require('./data')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


const app = express()
const port = 8080 


app.listen(port, function(){
    console.log(`API is running on http://${port}`)
})