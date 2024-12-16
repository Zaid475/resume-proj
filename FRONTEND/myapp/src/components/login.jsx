import { useContext, useState } from "react";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import api from "./axios";
import { Authcon } from "./usecontext";
import shoping from "../components/shoping_no_bg.png"

function Login() {
    const{dispatch}=useContext(Authcon)
    const path=useNavigate();
    const [state, updatedstate] = useState({
        email: "",
        password: ""
        


    });
    function uservalue(event) {
        console.log(event.target.value, event.target.name);
        updatedstate({ ...state, [event.target.name]: event.target.value })

    }
    console.log(state);
    async function submit(event) {
        event.preventDefault();
        if (!state.email || !state.password ) {
            return toast.error("Fill the fields")
        }
            
            try {
                const response=await api.post("/auth/login",{UserData:state})
                if(response.data.success){
                    dispatch({type:"login",payload:response.data.Userdata})
                    toast.success(response.data.message)
                    path("/")
                    

                }
                else{
                    toast.error(response.data.message)
                }


            }
            catch (error) {
                toast.error(error.response.data.message)

            }


        }
        function sign(){
            path("/register")
        }
        
    

        return (
            <div style={{height:"1000px", backgroundColor:"#59284e"}} >
                <img src={shoping} alt="shop" height="190px" width="220px" />
                <form onSubmit={submit} autoComplete="off">

                    
                    <input autoFocus style={{height:"30px",width:"220px"}}
                    onChange={uservalue} autoComplete="new-email" name="email" type="email" placeholder="Your Email"></input><br/><br/>
                    
                    <input autoFocus style={{height:"30px",width:"220px"}}
                    onChange={uservalue} type="password" name="password" autoComplete="new-password" placeholder="Your Password"></input><br/><br/>
                   
                    <input type="submit" style={{background:"black",color:"white",borderRadius:"5px",height:"40px", width:"150px",fontSize:"15px"}} value="SIGN IN"></input>
                    <p style={{color:"white", cursor:"pointer"}} onClick={sign}>Sign Up</p>
                    
                </form>
            </div>



        )
    
}

    export default Login;