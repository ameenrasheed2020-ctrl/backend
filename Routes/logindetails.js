const express=require("express")
const createlogin = require("../Controler/logincontroller")
const router=express.Router()

router.route("/loginny").post(createlogin)  
module.exports=router