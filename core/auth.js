import jwt from 'jsonwebtoken'

const createToken=async(userId)=>{
 const token=jwt.sign({userId},'secret',{expiresIn:300000})
 return token;
}

export {createToken}