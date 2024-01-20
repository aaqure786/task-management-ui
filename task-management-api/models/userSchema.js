const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        default: 'Admin',
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true
    },
    
},{timestamps:true});
const User = mongoose.model("Users", userSchema);
(async () => {
    try {
        await User.ensureIndexes();
        console.log("Indexes created successfully");
    } catch (error) {
        console.error("Error creating indexes:", error.message);
    }
})();

module.exports = User;