const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profiles'); 
        
    },
    filename: function (req, file, cb) {
        // const uniquekey= `ameen.jpg`
        console.log("ggg :",Date.now());
        console.log("ggghhhhh :",file.originalname);
        
        cb(null, Date.now() + "-" + file.originalname); 
    }
});

const upload = multer({ storage: storage });

module.exports = { upload };