const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Name:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    phonenumber:{type:Number},
    profilephoto:{type:String}
   
});
const userModel=mongoose.model("User", userSchema);//user is defined as in database username are stored in database
module.exports=userModel;
