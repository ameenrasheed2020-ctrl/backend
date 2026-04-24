const express = require('express')
const path = require("path")
const connections = require('./Mongodb/config')
// const { route } = require('./Routes/userdetail')
const dotenv = require('dotenv')
const router = require('./Routes/userdetail')
const router2 = require('./Routes/logindetails')

const app = express()

connections()
dotenv.config()


app.use(express.json())
app.use('/auth',router)
app.use('/getuser',router)

app.listen(6500,()=>{
    console.log("server host");
    
})