import Usermodel from "../models/Userschema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Register=async(req,res)=>{
    try{
    const{name,email,password,confirmPassword}=req.body.userData;
    
    console.log(name,email,password,confirmPassword,"req.body.userData");
    if(!name || !email || !password || !confirmPassword){
         return res.json({message:"Fill all fields",success:false})
    }
    const emailexist=await Usermodel.findOne({email:email});
    console.log(emailexist);
    
    if(emailexist){
        return res.json({message:"Email already exists",success:false})
    }
    const hashedpassword= await bcrypt.hash(password,10);
    console.log(hashedpassword);
    
    const newuser=new Usermodel({
        name:name,
        email:email,
        password:hashedpassword,
        confirmPassword:hashedpassword
       
    })
    console.log(newuser);
    const response=await newuser.save();
    console.log(response)
     return res.json({message:"Registration completed",success:true})
    }
    catch(error){
        res.json({message:error,success:false});
    }
    }




    export const Login=async (req,res)=>{
        try{
        
        const{email,password}=req.body.UserData;
        console.log("email",email,"password",password)
        if(!email || !password){
            return res.json({message:"Fill the fields", success:false})
        }
        const existemail= await Usermodel.findOne({email:email})
        console.log(existemail);
        if(!existemail){
            return res.json({message:"Email not found Try again",success:false})
        }
        const passwordcheck=await bcrypt.compare(password,existemail.password)
        if(!passwordcheck){
            return res.json({message:"wrong password Try again",success:false})
        }
        
        const encryptedtoken=jwt.sign({Userid:existemail._id},process.env.ENCRYPTIONSECRET);
        console.log(encryptedtoken,"ENCRYPTEDTOKEN")
        
        res.cookie("Token",encryptedtoken)
        
        return res.json({
            message:"Login Successful",
            success:true,
            Userdata:{
                email:existemail.email,password:existemail.password,name:existemail.name,userId:existemail._id
            }
            
        
        
        
        });
        
        
        
        
        }
        catch(error){
            console.log(error);
        
        }
        }


// export const UserData=async (req,res)=>{
//     try{
//         console.log(req.cookies,"your cookie")
//         const token=req.cookies.Token
//         if(!token) return res.status(400).json({success:false})
//         const tokendata=jwt.verify(token,process.env.ENCRYPTIONSECRET)
//     console.log(tokendata)
//     const userexist=await Usermodel.findById(tokendata.Userid)
//     console.log(userexist)
//     if(!userexist) return res.status(400).json({success:false})
//         return res.status(200).json({success:true,UserData:{
//             email:userexist.email,name:userexist.name,userId:userexist._id
//         }})

      
//     }
//     catch(error){
        
//         return res.json({message:error,success:false})
//     }
// }