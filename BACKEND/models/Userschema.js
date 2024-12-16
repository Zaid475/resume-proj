import { model, Schema } from "mongoose"


const Userschema= new Schema({
    name:String,
    email:String,
    password:String,
    confirmPassword:String
})

const Usermodel= model("Usermodel",Userschema)

export default Usermodel