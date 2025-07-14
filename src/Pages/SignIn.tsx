import { useState, } from 'react';
import { BottomWarning } from '../Components/BottomWarning';
import { Button } from '../Components/Button';
import { Heading } from '../Components/Heading'
import { InputBox } from '../Components/InpuBox';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


export const SignIn = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

  return (
   <div className="bg-[#000000] h-screen flex justify-center">
      <div className="flex flex-col justify-center">
         <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
          backdrop:blur-3xl rounded-4xl">
        <Heading label={"Sign In"} />
        <InputBox onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
          setUsername(e.target.value);
        }}
         label={"Username"} placeholder={"Enter your username"}></InputBox>
        <InputBox onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
          setPassword(e.target.value);
        }}
        label={"Password"} placeholder={"Enter your password"} ></InputBox>

        <Button onClick={async () => {
          const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
            username,
            password,
            role: "user" 
          });
            localStorage.setItem("token", response.data.token);
            navigate('/')
        }
      
      }

         label={"Sign In"}></Button>
        <BottomWarning label={"Donot have an account?"} to={"/signup"} buttonText={"Sign Up"} ></BottomWarning>
         </div>
      </div>
    </div> )}

