import { BottomWarning } from '../Components/BottomWarning';
import { Button } from '../Components/Button';
import { Heading } from '../Components/Heading'
import { InputBox } from '../Components/InpuBox';


export const SignIn = () => {
  return (
   <div className="bg-[#000000] h-screen flex justify-center">
      <div className="flex flex-col justify-center">
         <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
          backdrop:blur-3xl rounded-4xl">
        <Heading label={"Sign In"} />
        <InputBox label={"Username"} placeholder={"Enter your username"}></InputBox>
        <InputBox label={"Password"} placeholder={"Enter your passowrd"}></InputBox>
        <Button label={"Sign In"}></Button>
        <BottomWarning label={"Donot have an account?"} to={"/signup"} buttonText={"Sign Up"} ></BottomWarning>
         </div>
      </div>
    </div> )}

