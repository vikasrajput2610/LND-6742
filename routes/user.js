import express from 'express'
import { login, register } from '../controllers/user.js';
import { loginValidation, registerValidation } from '../core/validation.js';


const userRouter=express.Router();

userRouter.post('/register',registerValidation,register)
userRouter.post('/login',loginValidation,login)


export default userRouter;
