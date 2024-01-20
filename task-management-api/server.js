const express =require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

const userRoutes = require("./routers/adminRoutes")
const taskRoutes = require("./routers/taskRoutes")

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user/',userRoutes)
app.use('/api/task/',taskRoutes)

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("DB Connection Successful")
})
.catch((err)=>{
    console.log(err.message)
})  




const port =  process.env.PORT || 5001;


if(process.env.NODE_ENV == "production"){
    app.use(express.static("task-management/build"))
}
 
app.listen(port,()=>{
    console.log(`Task Management is runngin on ${port}`) 
})