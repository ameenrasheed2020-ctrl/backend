
const loginSchema = require("../Models/login")

const createlogin = async (req, res) => {
    const { email, password } = req.body;     
    const logindetails = await loginSchema.create({email, password
    })
    res.json({ data: logindetails, message: "login details added" })
}

module.exports = createlogin;