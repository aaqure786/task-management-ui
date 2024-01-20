const router = require("express").Router();
const Task = require("../models/taskSchema");
const fetchUser = require('../Middleware/fetchUser')

// Route to add task

router.post("/addtask",fetchUser, async (req,res)=>{
    try {
        const task =await Task.create({
                title:req.body.title,
                status:req.body.status,
                description: req.body.description
        });
        res.json(task)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;