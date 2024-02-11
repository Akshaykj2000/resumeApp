const express =require("express")
const cors =require("cors")
const mongoose=require("mongoose")
const userRouter =require("./controller/userRouter")

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://akshaykj:akshaykj@cluster0.3vob5wn.mongodb.net/resumeDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.use("/api/resume/",userRouter)

app.listen("3002",()=>{
    console.log("Server Running")
})