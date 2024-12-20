import { createToken } from "../core/auth.js";
import userSchema from "../model/user.js";
import bcrypt from 'bcrypt'
export const register = async (req, res) => {
    try {
        const { full_name, email, mobile, password } = req.body;
        console.log(req.body)
        const checkUser = await userSchema.findOne({ email, mobile });
        console.log("the check suer is ==>",checkUser)
        if (checkUser) {
            return res.status(202).json({
                success: false,
                message: "User already exist"
            })
        }
        const hashPassword =await bcrypt.hash(password, 10);
        const data = {
            full_name, email, mobile, password: hashPassword
        }
        console.log("the data is ==>>",data)
        const user = await userSchema.create(data)
        const token = await createToken(user._id.toString());
        await user.save()
        const userData={
            userId:user._id.toString(),
            full_name:user.full_name,
            email:user.email,
            mobile:user.mobile
        }
        if (token) {
            return res.status(200).json({
                success:true,
                message: "User successfully created",
                user: userData,
                auth_token:token
            })
        } else {
            return res.status(400).json({
                message: "Error in creating user",
                user: user,
                sucess:false
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Some internal error occured"
        })
    }
}

export const login = async (req, res) => {
    try {
        const {email,password}=req.body;
        // console.log(req.body)
        const user=await userSchema.findOne({email});
        if(!user){
            return res.status(202).json({
                success:false,
                message:"user does not exist"
            })
        }
        const pass= await bcrypt.compare(password,user.password);
        if(!pass){
            return res.status(202).json({
                success:false,
                message:"Invalid Password"
            })
        }
        const token=await createToken(user._id.toString());
        const userData={
            userId:user._id.toString(),
            full_name:user.full_name,
            email:user.email,
            mobile:user.mobile
        }
        return res.status(200).json({
            message:"Log In Sucess",
            user:userData,
            auth_token:token,
            success:true,
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message:"Internal Error"
        })
    }

}