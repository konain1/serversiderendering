
const express = require('express')

const route = require('./routes/app')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'ejs');
app.use(express.json())

mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/serversideURL')
.then(()=>{console.log('connected to serverside')})
app.use('/',route)

app.use('/serverside' , route)


app.listen(4012,()=>console.log('server runs on  4012'))