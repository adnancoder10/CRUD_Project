const express = require('express')
const ConnectDb = require('./db/connetedb')
const web = require('./routes/web')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))


// connecting mongo db 
ConnectDb('mongodb://localhost:27017/students')

// Set temp engine
app.set('view engine', 'ejs')
app.set('views', './views')





// First set public folder here
app.use(express.static(__dirname + '/public'))

// Set routes 
app.use('/', web)

app.listen(8000, ()=>{
    console.log('Server is runing on port: http://localhost:8000/');
})


