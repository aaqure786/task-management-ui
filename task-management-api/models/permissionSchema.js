const mongoose = require('mongoose');
const {Schema} = mongoose;

const permissionSchema = new Schema({
    role: {
        type: String,
        required: true,
        unique: true,
    },
    canedit:{
        type: Boolean,
        default: false,
    },
    canview:{
        type: Boolean,
        default: false,
    },
    candelete:{
        type: Boolean,
        default: false,
    },
    canadd:{
        type: Boolean,
        default: false,
    } 
    
},{timestamps:true});
const Permission = mongoose.model("Permission", permissionSchema);
(async () => {
    try {
        await Permission.ensureIndexes();
        console.log("Indexes created successfully");
    } catch (error) {
        console.error("Error creating indexes:", error.message);
    }
})();

module.exports = Permission;