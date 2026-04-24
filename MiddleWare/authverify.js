const jwt = require('jsonwebtoken');
const userModel = require('../Models/user');

const verifytoken = (req, res, next) => {
    console.log("currently working");

    const authheader = req.headers.authorization;
    const secret_key = "ameen";

    console.log("this is :", authheader);

    if (!authheader) {
        return res.status(403).json({ message: "token required" });
    }

    const extractedToken = authheader.split(" ")[1];

    try {
        const decode = jwt.verify(extractedToken, secret_key);

        req.user = decode;  
        next();
    } catch (error) {
        res.status(401).json({ message: "token invalid/not verified" });
    }
};

const uploadprofilephoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const user = await userModel.findByIdAndUpdate(
      req.params.userId,
      { profilePhoto: `/uploads/profiles/${req.file.filename}` },
      { new: true }
    )

    res.json({
      message: "Profile photo uploaded successfully",
      user
    });

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Failed to upload profile photo" });
  }
};

module.exports = { verifytoken, uploadprofilephoto };