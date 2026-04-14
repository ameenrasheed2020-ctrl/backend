const userModel = require("../Models/user")
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const createuser = async (req, res) => {
    const { Name, email, password, age, phonenumber } = req.body;

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
        return res.status(400).json({ message: "user is already existed...." })
    } else {

        const hashedpasswrd = await argon2.hash(password);
        const userr = await userModel.create
            ({
                Name,
                email,
                password: hashedpasswrd,
                age,
                phonenumber
            })

        res.json({ data: userr, message: "user succesfully added" })
    }




}

const getuser = async (req, res) => {
    const userdetails = await userModel.find()
    res.json(userdetails)

}
const getuserbyid = async (req, res) => {
    const kkk = await userModel.findById(req.params.id)
    res.json(kkk)

}
const deleteuserbyid = async (req, res) => {
    const kkk = await userModel.findByIdAndDelete(req.params.id)
    res.json("succesfully deleted")
}



const edituserbyid = async (req, res) => {

    try {
        const { Name, email, password, age, phonenumber } = req.body;
        const userId = req.params.id
        const edit = await userModel.findByIdAndUpdate(userId, { Name, email, password, age, phonenumber, }, { new: true })
        res.json({ data: edit, message: "succcessfully " })
    } catch (error) {
        console.log("edit error : ", error);

    }
}





const secret_key = "ameen";

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

      
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password required"
            });
        }

        
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).send({
                message: "Invalid email or password"
            });
        }

       
        const isValid = await argon2.verify(user.password, password);

        if (!isValid) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

      
        const token = jwt.sign(
            { userId: user.Name },
            secret_key,
            { expiresIn: "1h" }
        );

       
        res.status(200).json({
            message: "Login successful",
            
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            message: "Server error"
        });
    }
};





    module.exports = { createuser, getuser, getuserbyid, deleteuserbyid, edituserbyid,register};











