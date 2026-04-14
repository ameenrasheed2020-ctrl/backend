const express = require('express')
const path = require("path")
const connections = require('./Mongodb/config')
// const { route } = require('./Routes/userdetail')
const router = require('./Routes/userdetail')
const router2 = require('./Routes/logindetails')

const app = express()

connections()


app.use(express.json())
app.use('/auth',router)
app.use('/login',router2)
app.use('/getuser',router)

app.listen(6500,()=>{
    console.log("server host");
    
})