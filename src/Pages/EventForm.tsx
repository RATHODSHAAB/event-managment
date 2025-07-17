import { useState, type ChangeEvent } from "react"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InpuBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser , faCalendarDay , faCircleExclamation , faLocationArrow , faFileImage} from '@fortawesome/free-solid-svg-icons';

export const EventForm = () => {
    const [selectedDate , setSelectedDate] = useState("");

    return (
        <div className="bg-[#000000] h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
                backdrop:blur-3xl rounded-4xl">
                    <Heading label={"Event Creation"} />
                    <InputBox 
                    icon={<FontAwesomeIcon icon={faUser} />}
                    label={"Name"} placeholder={"Enter the event name"} type="text" ></InputBox>


                    <InputBox 
                    icon={<FontAwesomeIcon icon={faCircleExclamation} />}
                    label={"Description"} placeholder={"Enter the description name"} type="text" ></InputBox>

                    <InputBox 
                     icon={<FontAwesomeIcon icon={faLocationArrow} />}
                    label={"Venue"} placeholder={"Enter the venue"} type="text" ></InputBox>

                    <InputBox
                     icon={<FontAwesomeIcon icon={faCalendarDay} />}
                     label={"Select the date"} placeholder={"Emter the date"} type="date" > </InputBox>

                      <InputBox 
                    icon={<FontAwesomeIcon icon={faFileImage} />}
                    label={"Image"} placeholder={"Choose the image"} type="file" ></InputBox>


                    <Button label={"Submit"}  ></Button>
                </div>
            </div>
        </div>
    )
}