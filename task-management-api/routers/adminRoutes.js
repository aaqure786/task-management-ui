const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema")



const JWT_SEC ="JWT12354"
//route to add User user
router.post("/adduser", async (req,res)=>{
    try {
        const user =await User.create({
            name:req.body.name,
            role:req.body.role,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password, 'secret123').toString(),
        });
        res.json(user)
    } catch (error) {
        console.log(error.message)
    }
});

 
//route to get gata
router.post('/getdata',async (req, res)=>{
    try {
        const token = req.body.token
        const decode = jwt.decode(token,JWT_SEC)
        if(decode){
            return res.status(200).json({user: decode})
        }
    } catch (error) {
        res.status(404,"No data to show")
    }
});

//route to login 
router.post("/login",async (req, res)=>{
    try {
        const name = req.body.name;
    const password = req.body.password;

    const data =await User.findOne({name: name})
    const pass = CryptoJS.AES.decrypt(data.password, "secret123").toString(CryptoJS.enc.Utf8);
    if(data.name === name && pass ===password)
    {
        const value ={ name:data.name, id: data._id, role: data.role}
        const authToken = jwt.sign(value,JWT_SEC)
        return res.status(200).json({status:true, authToken });
    }
    } catch (error) {
        console.log(error.message)
    }
    
})

module.exports = router