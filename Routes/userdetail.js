const express=require("express")
const router=express.Router()
const {getuser,createuser,getuserbyid,deleteuserbyid, edituserbyid, register} =require("../Controler/usercontroler")
const { verifytoken, uploadprofilephoto } = require("../MiddleWare/authverify")
const { upload } = require("../Controler/multer")



router.post("/createuser",createuser)
router.get("/getuser", verifytoken,getuser)
router.get("/getuser/:id",getuserbyid)
router.delete("/deleteuser/:id", deleteuserbyid)
router.put("/updateuser/:id",edituserbyid)
router.post("/logincredencials",register)
router.put("/uploadphoto/",verifytoken,upload.single("profilephoto"),uploadprofilephoto)


module.exports=router