const router = require("express").Router();
const fetchUser = require("../Middleware/fetchUser");
const Permission = require("../models/permissionSchema")




//route to add permission for users
router.post("/add-permissions", async (req,res)=>{
    try {
        const perm =await Permission.create({
            role:req.body.role,
            canedit:req.body.canedit,
            canadd:req.body.canadd,
            canview: req.body.canview,
            candelete: req.body.candelete
        });
        res.json(perm)
    } catch (error) {
        console.log(error.message)
    }
});

 
//route to edit permission
router.put("/edit-permission/:role", fetchUser, async (req, res)=>{
    try {
        const  perm = await Permission.findOneAndUpdate({role: req.params.role},{
            role:req.body.role,
            canedit:req.body.canedit,
            canadd:req.body.canadd,
            canview: req.body.canview,
            candelete: req.body.candelete
        });
        if(perm){
            return res.status(200).json({msg: "Item Updated Successfuly"})
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
})

//route to get permission by role

router.get("/get-permission/:role",fetchUser, async (req,res)=>{
    try {
        const perm = await Permission.find({role: req.params.role})
        if(perm){
            return res.status(200).json(perm)
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
})


module.exports = router