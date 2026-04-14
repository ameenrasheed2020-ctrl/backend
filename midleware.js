    const express=require("express");
    const app = express()

    const loginpage=(req,res,next)=>{
        console.log("authentication succesfull");
        next()
        
    }



    app.get("/home",loginpage,(req,res)=>{
        res.send("its currently working")
    })
    app.get("/order",loginpage,(req,res)=>{
        res.send("please login")
    })  


    app.listen(8000,()=>
        console.log("the server is running")
        
    )