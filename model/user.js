import mongoose from "mongoose";

const schema=new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const userSchema=mongoose.model('Users',schema)
export default userSchema;