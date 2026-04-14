const express=require("express")
const router=express.Router()
const {getuser,createuser,getuserbyid,deleteuserbyid, edituserbyid, login, register} =require("../Controler/usercontroler")
const { verifytoken } = require("../MiddleWare/authverify")


router.post("/login",createuser)
router.get("/getuser", verifytoken,getuser)
router.get("/getuser/:id",getuserbyid)
router.delete("/deleteuser/:id", deleteuserbyid)
router.put("/updateuser/:id",edituserbyid)
router.post("/logincredencials",register)
module.exports=router