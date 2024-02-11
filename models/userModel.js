
const mongoose =require("mongoose")

const userRouter = mongoose.Schema(
    {
            name:{
                type:String,required:true
            },
            email:{
                type:String,required:true
            },
            phoneno:{
                type:String,required:true
            },
            age:{type:String,required:true},
            address:{type:String,required:true},
            password:{type:String,required:true}

    }
)

module.exports =mongoose.model("user",userRouter)