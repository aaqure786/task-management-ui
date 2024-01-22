const router = require("express").Router();
const Task = require("../models/taskSchema");
const fetchUser = require('../Middleware/fetchUser')

// Route to add task

router.post("/addtask", fetchUser, async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            status: req.body.status,
            description: req.body.description
        });
        res.json(task)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
});

// Routes to fetch all tasks

router.get('/gettasks', fetchUser, async (req, res) => {
    try {
        const tasks = await Task.find()
        if (tasks) {
            return res.status(200).json(tasks)
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
});

// Routes to fetch single task

router.get('/gettasks', fetchUser, async (req, res) => {
    try {
        const task = await Task.findById({ _id: req.params.id })
        if (task) {
            return res.status(200).json(task)
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
});

// Routes to edit task
router.put("/edittask/:id", fetchUser, async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate({ _id: req.params.id }, {
            title: req.body.title,
            status: req.body.status,
            description: req.body.description
        });
        if(task){
            return res.status(200).json({msg:"Data Update Successfuly"})
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
});

// Routes to delete task
router.delete("/deletetask/:id",fetchUser, async (req, res)=>{
    try {
        const task = await Task.findByIdAndDelete({_id:req.params.id})
        if(task){
            return res.status(200).json({msg:"Item Deleted Successfully"})
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
})

module.exports = router;