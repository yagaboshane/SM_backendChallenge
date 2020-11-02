const express = require ('express')
const axios = require ('axios')
const path = require ('path')
const { stringify } = require('querystring')

const app = express()
const port = 3300

app.get('/', function (req, res){
    console.log('page is running')
    let home = path.join(__dirname,'home.html')
    res.sendFile(home)
})

app.post('/sign_up', function(){

})

app.listen(port, function(){
    console.log(`App is listening on http://${port}`)
})