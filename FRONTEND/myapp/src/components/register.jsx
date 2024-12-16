import { useState } from "react";
// import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import shoping from "../components/shoping_no_bg.png"
import api from "./axios";




function Register() {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name, "check");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      if (userData.password !== userData.confirmPassword) {
        return toast.error("Password and confirm password do not match.");
      }
      try {
        let response = await api.post("/auth/register", { userData });
  
        if (response.data.success) {
          toast.success(response.data.message);
          router("/login");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error(error); // For debugging purposes
        // Check if the error has a message property and show that in the toast
        const errorMessage = error?.response?.data?.message || error.message || "An unknown error occurred";
        toast.error(errorMessage);
      }
    } else {
      toast.error("All fields are required.");
    }
  }
  function account(){
    router("/login")
  }
  
  return (
    <div style={{height:"1000px", backgroundColor:"#59284e"}}>

      {/* <h1 style={{fontFamily:"Open Sans"}}>Register</h1> */}
      <img src={shoping} alt="shop" height="190px" width="220px" />
      <form onSubmit={handleSubmit} autoComplete="off">
        
        {/* <label>Name</label> */}
        <br />
        <input autoFocus style={{height:"30px",width:"220px"}}
          onChange={handleChange}
          type="text"
          
          placeholder="Your Name"
          name="name"
          required
        />
        <br />
        
        {/* <label>Email</label> */}
        <br />
        <input style={{height:"30px",width:"220px"}}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <br />
        
        {/* <label>Password </label> */}
        <br />
        <input style={{height:"30px",width:"220px"}}
          onChange={handleChange}
          autoComplete="new-password"
          type="password"
          placeholder="Your Password"
          name="password"
          required
        />
        <br />
        
        {/* <label>Confirm Password </label> */}
        <br />
        <input style={{height:"30px",width:"220px"}}
          onChange={handleChange}
          type="password"
          placeholder="Your Confirm Password"
          name="confirmPassword"
          required
        />
        <br/>
        <p style={{color:"white"}}>By creating an account, you agree to ShopSphere Privacy Notice and Terms of Use.</p>
        <input type="submit" style={{background:"black",color:"white",borderRadius:"5px",height:"40px", width:"150px",fontSize:"15px"}}  value="SIGN UP" />
        <p onClick={account}
        style={{cursor:"pointer",color:"white"}}>Already Have An Account?</p>
      </form>
    </div>
  );
}
export default Register;