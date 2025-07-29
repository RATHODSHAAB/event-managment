import { useState, } from 'react';
import { BottomWarning } from '../Components/BottomWarning';
import { Button } from '../Components/Button';
import { Heading } from '../Components/Heading'
import { InputBox } from '../Components/InpuBox';
import { DropDown } from '../Components/DropDown';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser , faKey } from '@fortawesome/free-solid-svg-icons';



export const SignIn = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("");
   const navigate = useNavigate();

  return (
   <div className="bg-[#000000] h-screen flex justify-center">
      <div className="flex flex-col justify-center">
         <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
          backdrop:blur-3xl rounded-4xl">
        <Heading label={"Sign In"} />
        <InputBox 
        icon={<FontAwesomeIcon icon={faUser} />}
        onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
          setUsername(e.target.value);
        }}
         label={"Username"} placeholder={"Enter your username"}></InputBox>


        <InputBox 
        icon={<FontAwesomeIcon icon={faKey} />}
        onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
          setPassword(e.target.value);
        }}
        label={"Password"} placeholder={"Enter your password"} ></InputBox>

        <DropDown role={role} setRole={setRole}></DropDown>

              <Button
  label={"Register"}
  onClick={async () => {
    try {
      // Set API endpoint based on role
      const url =
        role === "admin"
          ? "http://localhost:5000/api/v1/admin/signin"
          : "http://localhost:5000/api/v1/user/signin";

      // Prepare payload based on role
      const payload =
        role === "admin"
          ? { username,  password, role,  }
          : { username,  password, role };

      // Make Axios POST request
      const response = await axios.post(url, payload);

      // Save token in localStorage
      localStorage.setItem("token", response.data.token);
      if(role === 'admin' ){
        navigate('/')
      }else{
        navigate('/')
      }

      // Optionally navigate or show success message
      console.log("Registered successfully");
    } catch (error) {
      console.error("Registration failed:", error);
      // Optionally show error message to user
    }
  }}
></Button>

      
        <BottomWarning label={"Donot have an account?"} to={"/signup"} buttonText={"Sign Up"} ></BottomWarning>
         </div>
      </div>
    </div> )}

