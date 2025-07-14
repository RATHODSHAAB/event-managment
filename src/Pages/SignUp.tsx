import { useState } from 'react';
import { BottomWarning } from '../Components/BottomWarning';
import { Button } from '../Components/Button';
import { DropDown } from '../Components/DropDown';
import { Heading } from '../Components/Heading';
import { InputBox } from '../Components/InpuBox';
import axios from 'axios';

 export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
    const [role, setRole] = useState("user");
  return (
    <div className="bg-[#000000] h-screen flex justify-center">
      <div className="flex flex-col justify-center">

         <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
          backdrop:blur-3xl rounded-4xl">
        <Heading label={"Sign Up"} />
        <InputBox onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
          setUsername(e.target.value)
        }}
         label={"Username"} placeholder={"Enter your username"}></InputBox>
        <InputBox onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
          setEmail(e.target.value)
        }}
         label={"Email"} placeholder={"Enter your email"}></InputBox>
        <InputBox onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
          setPassword(e.target.value)
        }}
         label={"Password"} placeholder={"Enter your passowrd"}></InputBox>
        <DropDown role={role} setRole={setRole}></DropDown>
         {role === "admin" && (
            <InputBox
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecretKey(e.target.value)}
              label={"Secret Key"}
              placeholder={"Enter Admin Secret Key"}
            />
            
          )}

        <Button label={"Register"}  onClick={async ()=> {
           const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username,
            email,
            password,
            role,
            secretKey
           })
            localStorage.setItem("token", response.data.token)
        }}
        ></Button>
        
        <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"Sign In"} ></BottomWarning>
         </div>
      </div>
    </div>
  );
};