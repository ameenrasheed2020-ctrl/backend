const token = require('jsonwebtoken')
const verifytoken = (req, res, next) => {
    console.log("currelty working ")
    const authheader = req.headers.authorzation;
   
    const secret_key = "ameen";
    


    if (!authheader) {
        return res.status({ message: "token  required" })
    }
    const token = authheader.split(" ")[1];


    try {
        const decode = jwt.verify(token,secret_key)
        
        
        req.use = decode
        next();
    } catch (error) {
        res.status(404).json({ message: "token invalid/not verified" })

    }
}
module.exports = { verifytoken }