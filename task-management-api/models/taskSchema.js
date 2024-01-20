const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status:{
        type: String,
        default: 'In Progress',
    },
    description:{
        type: String,
        required: true,
    }
    
},{timestamps:true});
const Task = mongoose.model("Tasks", taskSchema);
(async () => {
    try {
        await Task.ensureIndexes();
        console.log("Indexes created successfully");
    } catch (error) {
        console.error("Error creating indexes:", error.message);
    }
})();

module.exports = Task;